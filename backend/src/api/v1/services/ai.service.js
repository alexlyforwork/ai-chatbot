import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
class AIService {
  // Get AI response based on the message
  async getAIResponse(msg) {
    // const mockResponse = ["Hi there", "Hello World"];
    // const reply = mockResponse[Math.floor(Math.random() * mockResponse.length)];
    // console.log(reply);
    // return reply;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Explain how AI works in a few words",
    });
    return response.text;
  }
}

export default new AIService();
