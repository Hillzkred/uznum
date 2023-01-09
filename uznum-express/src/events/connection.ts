import {Server} from "socket.io";

export const connectionEvent = (io: Server) => {
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}
