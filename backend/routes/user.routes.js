import express from "express";
import protectRoute from "../middelware/protectRoute.js";
import { getUserFromSidebar } from "../controller/user.contoller.js";

const router = express.Router();

router.get("/", protectRoute, getUserFromSidebar)

export default router;