import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_URL =
  "https://appsail-50025377992.development.catalystappsail.in/api/auth";
axios.defaults.withCredentials = true;

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("authToken");
    // console.log("Retrieved token:", token);
    return token;
  } catch (err) {
    console.error("Failed to retrieve token:", err);
    return null;
  }
};

axios.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>(null);

  const saveToken = async (token: string) => {
    try {
      await SecureStore.setItemAsync("authToken", token);
      console.log("Token saved successfully");
    } catch (err) {
      console.error("Failed to save token:", err);
    }
  };

  const removeToken = async () => {
    try {
      await SecureStore.deleteItemAsync("authToken");
      console.log("Token removed");
    } catch (err) {
      console.error("Failed to remove token:", err);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/signup`,
        { email, password, name },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
      await saveToken(response.data.token);
      return response.data.message;
    } catch (error: any) {
      setError(error.response?.data?.message || "Error signing up");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    debugger;
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
      await saveToken(response.data.token);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Error logging in";
      setError(errorMessage);
      console.error("Login error:", errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.post(`${API_URL}/logout`);
      setUser(null);
      setIsAuthenticated(false);
      await removeToken();
    } catch (error) {
      setError("Error logging out");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (code: string) => {
    if (!code) throw new Error("Please enter the code");
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${API_URL}/verify-email`,
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.message || "Error verifying email");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const initializeAuth = async () => {
    setIsCheckingAuth(true);
    try {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Failed to initialize auth:", error);
      setIsAuthenticated(false);
    } finally {
      setIsCheckingAuth(false);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      setMessage(response.data.message);
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Error sending reset password email"
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      setMessage(response.data.message);
    } catch (error: any) {
      setError(error.response?.data?.message || "Error resetting password");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    isCheckingAuth,
    error,
    message,
    signup,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword,
  };
};
