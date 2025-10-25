import { io } from "socket.io-client";
import axios from "axios";
import readline from "readline";

const socket = io("http://localhost:3000");

// Create readline interface without output to avoid echo
const rl = readline.createInterface({
  input: process.stdin
});

socket.on("connect", () => {
  console.log("Connected to server with ID:", socket.id);
  promptUser();
});

socket.on("connect_error", (err) => {
  console.log("Connection error:", err.message);
});

function promptUser() {
  process.stdout.write("You: "); 
  rl.question("", async (msg) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/ai/response",
        { message: msg }
      );
      console.log("AI:", data.response);
    } catch (err) {
      console.error("\nError getting AI response:", err.message);
    }
    promptUser();
  });
}