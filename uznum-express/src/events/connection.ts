import {Server} from "socket.io";
import {events} from "uznum-events";

export const connectionEvent = (io: Server) => {
    io.on(events.CONNECTION, (socket) => {
        console.log('a user connected');
        socket.on(events.DISCONNECT, () => {
            console.log('user disconnected');
        });
    });
}
