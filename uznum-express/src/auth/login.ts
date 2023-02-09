import {Express} from "express";
import {Scope} from "couchbase";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";

export const setupLogin = (app: Express, scope: Scope) => {
    const usersCollection = scope.collection("users");

    app.post('/login', (req, res) => {
        const {username, password} = req.body;
        usersCollection.get(username).then((result) => {
            const user = result.value;
            const accessToken = jwt.sign(
                {username: user.username, role: user.role},
                config.get("auth.jwt.secret"),
                {expiresIn: config.get("auth.jwt.expiresIn")}
            );
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {
                    res.status(200).send({
                            message: "Login successful",
                            accessToken
                        }
                    );
                }
            });
        });
    });
}