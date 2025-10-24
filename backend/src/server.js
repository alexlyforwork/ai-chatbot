import app from './app.js';
import { Server } from 'socket.io';
import {createServer} from 'node:http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server);

mongoose
    .connect(
        process.env.mongoURI
    )
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.log(err);
    })


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})