import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import busRoutes from "./routes/bus.route.js";

dotenv.config();

const app = express();
const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

// const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:8081", // Expo web
      "exp://192.168.43.123:8081", // Expo Go app URL
      "http://192.168.43.123:8081" // Local network IP address
    ],
    credentials: true, // Allow cookies and headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);
app.use("/api", busRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port: ", PORT);
});
