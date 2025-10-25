import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
class AIService {
  // Get AI response based on the message
  async getAIResponse(msg) {

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: msg,
    });
    return response.text;
  }
}

export default new AIService();
