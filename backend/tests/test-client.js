import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to server with ID:", socket.id);
    socket.emit('chatMessage', { user: 'Alex', message: 'Hello!' });
});

socket.on("connect_error", (err) => {
  console.log("Connection error:", err.message);
});


