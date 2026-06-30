import express from "express";
import { getMessages, sendMessage } from "../controller/messageController.js";

const router = express.Router();

router.route("/:roomid").get(getMessages).post(sendMessage);

export default router;
