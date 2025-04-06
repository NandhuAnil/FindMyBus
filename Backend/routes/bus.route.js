import express from "express";
import { searchBusesByLocation } from "../controllers/bus.controller.js";

const router = express.Router();

router.get("/buses/search", searchBusesByLocation);

export default router;