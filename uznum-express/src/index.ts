import http from "http";
import express, {Express} from "express";
import cors from "cors";
import config from "config";
import {socketIo} from "./events/socket-io.js";
import {setupCouchbase} from "./db/couchbase.js";
import {setupAuth} from "./auth/auth.js";
import {setupPlayers} from "./players/players.js";

const app: Express = express();

// Setup CORS
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
socketIo(server);

setupCouchbase().then((scope) => {
    const port = config.get("server.port");


    app.get('/', (req, res) => {
        res.send('Welcome to Uznum API');
    });


    setupPlayers(app, scope);
    setupAuth(app, scope);

    server.listen(port, () => {
        console.log(`listening on ${port}`);
    });
});

