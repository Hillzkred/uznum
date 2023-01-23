import {Express} from "express";
import {Scope} from "couchbase";
import bcrypt from "bcrypt";
import {validateUser} from "./user.validators";
import {ROLES} from "./auth.constants";

export const setupRegister = (app: Express, scope: Scope) => {
    const usersCollection = scope.collection("users");

    app.post('/register', (req, res) => {
        usersCollection.exists(req.body.username).then((exists) => {
            if (exists) {
                res.status(400).send({
                    message: 'Username already exists'
                });
            } else {
                const password = bcrypt.hashSync(req.body.password, 10);
                const user = {
                    username: req.body.username,
                    password: password,
                    role: ROLES.USER
                }
                validateUser(user);
                usersCollection.upsert(req.body.username, user).then(() => {
                    res.status(200).send({
                        message: 'User created'
                    });
                });
            }
        });
    });
}