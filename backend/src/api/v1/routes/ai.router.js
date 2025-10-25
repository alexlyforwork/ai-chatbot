import AIController from "../controllers/ai.controller.js";
import express from "express";

const AIRouter = express.Router();

AIRouter.post("/response", async (req, res, next) => {
  try {
    await AIController.getAIResponse(req, res);
  } catch (error) {
    next(error);
  }
});

export default AIRouter;
