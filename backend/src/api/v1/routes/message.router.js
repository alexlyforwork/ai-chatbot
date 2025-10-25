import MessageController from "../controllers/message.controller.js";
import express from "express";

const MessageRouter = express.Router();

MessageRouter.get("/", async (req, res, next) => {
  try {
    await MessageController.getMessagesByChatId(req, res);
  } catch (error) {
    next(error);
  }
});

MessageRouter.post("/", async (req, res, next) => {
  try {
    await MessageController.saveMessage(req, res);
  } catch (error) {
    next(error);
  }
});

export default MessageRouter;
