import http from "http";
import {setupIO} from "../socket-io-setup.js";
import {connectionEvent} from "./connection.js";

export const socketIo = (server: http.Server) => {
    const io = setupIO(server);

    // Socket.io events
    connectionEvent(io);
}
