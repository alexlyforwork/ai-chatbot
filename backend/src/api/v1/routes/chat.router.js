import ChatController from "../controllers/chat.controller.js";
import express from "express";

const ChatRouter = express.Router();

ChatRouter.post("/", async (req, res, next) => {
  try {
    await ChatController.createChat(req,res);
  } catch (error) {
    next(error);
  }
});

ChatRouter.get("/", async (req, res, next) => {
  try {
    await ChatController.getChatById(req,res);
  } catch (error) {
    next(error);
  }
});

ChatRouter.get("/user", async (req, res, next) => {
  try {
    await ChatController.getAllChatsByUserId(req,res);
  } catch (error) {
    next(error);
  }
});

export default ChatRouter;
