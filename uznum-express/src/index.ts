import http from "http";
import express, {Express} from "express";
import cors from "cors";
import config from "config";
import {setupIO} from "./socket-io-setup.js";

const app: Express = express();

// Setup CORS
app.use(cors());

const server = http.createServer(app);

const io = setupIO(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const port = config.get("server.port");
server.listen(port, () => {
    console.log(`listening on ${port}`);
});
