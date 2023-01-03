import { Server } from "socket.io";
import config from "config";
const whitelistConfig = config.get("cors.whitelist");
const whitelist = whitelistConfig.split(",");
export const setupIO = (server) => new Server(server, {
    cors: {
        origin: (origin, callback) => {
            if (origin && whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST']
    }
});
