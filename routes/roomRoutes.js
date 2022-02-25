import express from "express";
const router = express.Router();
import {
  getRooms,
  updateRoom,
  getRoom,
} from "../controllers/roomController.js";

router.get("/", getRooms);
router.get("/:slug", getRoom);
router.put("/:id", updateRoom);

export default router;
