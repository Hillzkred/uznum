import http from "http";
import express, {Express} from "express";
import cors from "cors";
import config from "config";
import {socketIo} from "./events/socket-io.js";
import {setupCouchbase} from "./couchbase.js";

const app: Express = express();

// Setup CORS
app.use(cors());

const server = http.createServer(app);
socketIo(server);
setupCouchbase().then(() => {
    const port = config.get("server.port");
    server.listen(port, () => {
        console.log(`listening on ${port}`);
    });
});

