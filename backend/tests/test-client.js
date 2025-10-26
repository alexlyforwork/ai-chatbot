import { io } from "socket.io-client";
import axios from "axios";
import readline from "readline";
import redis from "../config/redis.js";

const socket = io("http://localhost:3000");

// Create readline interface without output to avoid echo
const rl = readline.createInterface({
  input: process.stdin
});

socket.on("connect", async () => {
  console.log("Connected to server with ID:", socket.id);
  try {
    const {chatId} = (await axios.post('http://localhost:3000/api/v1/chat/',{title:'random'})).data
    promptUser(chatId.toString());
  }catch{
    console.log("Error fetching chatId")
  }
});

socket.on("connect_error", (err) => {
  console.log("Connection error:", err.message);
});

function promptUser(chatId) {
  process.stdout.write("You: "); 
  rl.question("", async (msg) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/ai/response",
        { message: msg }
      );
      await axios.post('http://localhost:3000/api/v1/message/',{
        role: "Human",
        chatId:chatId,
        message: msg
      })
      console.log("AI:", data.response);
      await axios.post('http://localhost:3000/api/v1/message/',{
        role: "AI",
        chatId:chatId,
        message: data.response
      })
      await redis.set('chatId:', chatId, "EX", 600);
    } catch (err) {
      console.error("\nError getting AI response:", err.message);
    }
    promptUser(chatId);
  });
}