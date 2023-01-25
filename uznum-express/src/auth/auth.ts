import {Express} from "express";
import {Scope} from "couchbase";
import {setupLogin} from "./login.js";
import {setupRegister} from "./register.js";

export const setupAuth = (app: Express, scope: Scope) => {
    setupLogin(app, scope);
    setupRegister(app, scope);
}