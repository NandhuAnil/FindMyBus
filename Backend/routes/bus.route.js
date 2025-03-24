import express from "express";
import { getBusByRoute, searchBuses } from "../controllers/bus.controller.js";

const router = express.Router();

router.get("/buses/search", searchBuses);
router.get("/buses/:routeNumber", getBusByRoute);

export default router;