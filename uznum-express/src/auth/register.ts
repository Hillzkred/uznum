import {Express} from "express";
import {Scope} from "couchbase";
import bcrypt from "bcrypt";
import {validateUser} from "./user.validators.js";
import {ROLES} from "./auth.constants.js";
import {pipe, prop, either, ifElse, always, isEmpty, propSatisfies, isNil} from "ramda";

export const setupRegister = (app: Express, scope: Scope) => {
    const usersCollection = scope.collection("users");

    app.post('/register', (req, res) => {
        if (pipe(
            prop("body"),
            ifElse(isEmpty, always(true),
                either(
                    propSatisfies(either(isEmpty, isNil), "username"),
                    propSatisfies(either(isEmpty, isNil), "password"),
                )
            ))
        (req)) {
            res.status(400).send({
                message: "Missing username or password"
            });
        } else {
            usersCollection.exists(req.body.username).then(({exists}) => {
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
                    console.log('register me', user);
                    usersCollection.upsert(user.username, user).then(() => {
                        res.status(200).send({
                            message: 'User created'
                        });
                    });
                }
            });
        }
    });
}