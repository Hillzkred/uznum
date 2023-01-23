import {Express} from "express";
import {Scope} from "couchbase";
import bcrypt from "bcrypt";

export const setupLogin = (app: Express, scope: Scope) => {
    const usersCollection = scope.collection("users");

    app.post('/login', (req, res) => {
        const {username, password} = req.body;
        usersCollection.get(username).then((result) => {
            const user = result.value;
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {
                    res.status(200).send({
                            message: "Login successful",
                        }
                    );
                }
            });
        });
    });
}