import app from './app.js';
import { Server } from 'socket.io';
import {createServer} from 'node:http';

const port = 3000;
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})