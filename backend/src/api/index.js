import express from "express";
import AIRouter from "./v1/routes/ai.router.js";
import MessageRouter from "./v1/routes/message.router.js";
import ChatRouter from "./v1/routes/chat.router.js";
import AuthRouter from "./v1/routes/auth.router.js";

const router = express.Router();

router.use("/ai", AIRouter);
router.use("/message", MessageRouter);
router.use("/chat", ChatRouter);
router.use("/auth", AuthRouter);

export { router };
