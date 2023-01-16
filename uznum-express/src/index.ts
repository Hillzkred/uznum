import http from "http";
import express, {Express} from "express";
import cors from "cors";
import config from "config";
import {socketIo} from "./events/socket-io.js";
import {setupCouchbase} from "./db/couchbase.js";
import {validatePlayer} from "./validators/player.validators.js";

const app: Express = express();

// Setup CORS
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
socketIo(server);
setupCouchbase().then((scope) => {
    const port = config.get("server.port");

    const playersCollection = scope.collection("players");

    app.get('/', (req, res) => {
        res.send('Welcome to Uznum API');
    });

    app.post('/player', (req, res) => {
        validatePlayer(req.body);
        playersCollection.upsert(req.body.name, req.body).then(() => {
            res.status(200).send(
                req.body
            );
        });
    });

    server.listen(port, () => {
        console.log(`listening on ${port}`);
    });
});

