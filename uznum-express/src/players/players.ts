import {Express} from "express";
import {Scope} from "couchbase";
import {validatePlayer} from "./player.validators.js";

export const setupPlayers = (app: Express, scope: Scope) => {
    const playersCollection = scope.collection("players");

    app.post('/player', (req, res) => {
        validatePlayer(req.body);
        const player = {
            name: req.body.name,
            scores: req.body.scores
        };
        playersCollection.upsert(req.body.name, req.body).then(() => {
            res.status(200).send(
                player
            );
        });
    });
}