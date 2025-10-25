import app from "./app.js";
import { Server } from "socket.io";
import { createServer } from "node:http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AIService from "./api/v1/services/ai.service.js";
import axios from "axios";

dotenv.config();

const port = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server);

mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  socket.on('chatMessage', (msg) => {
    console.log('Message received:', msg);
    const aiResponse = AIService.getAIResponse(msg.message);
    socket.emit('chatResponse', { user: 'AI', message: aiResponse });
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
