import { useAuth } from "./authStore";
import { Redirect } from "expo-router";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isCheckingAuth } = useAuth();

  if (isCheckingAuth) {
    return null; 
  }

  if (!isAuthenticated) {
    return <Redirect href="/(welcome)" />;
  }

  return <>{children}</>;
}
