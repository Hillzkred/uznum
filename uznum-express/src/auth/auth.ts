import {Express} from "express";
import {Scope} from "couchbase";
import {setupLogin} from "./login";
import {setupRegister} from "./register";

export const setupAuth = (app: Express, scope: Scope) => {
    setupLogin(app, scope);
    setupRegister(app, scope);
}