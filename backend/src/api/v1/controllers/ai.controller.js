import AIService from "../services/ai.service.js";

class AIController {
   async getAIResponse(req, res) {
    try {
      const { message } = req.body;
      const aiResponse = await AIService.getAIResponse(message);
      res.status(200).json({ response: aiResponse });
    } catch (error) {
      console.error("Error getting AI response:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  }
}

export default new AIController();