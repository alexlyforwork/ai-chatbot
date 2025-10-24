import { io } from "socket.io-client";
import {getAIResponse} from '../src/ai.js';

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to server with ID:", socket.id);
});

socket.on("connect_error", (err) => {
  console.log("Connection error:", err.message);
});



