import {run} from "./db.helpers.js";

run(`
            CREATE TABLE IF NOT EXISTS admins
            (
                id       INTEGER PRIMARY KEY AUTOINCREMENT,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );
            CREATE TABLE IF NOT EXISTS players
            (
                id   INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255) NOT NULL UNIQUE
            );
            CREATE TABLE IF NOT EXISTS scores
            (
                id        INTEGER PRIMARY KEY AUTOINCREMENT,
                player_id INTEGER NOT NULL,
                score     INTEGER NOT NULL,
                FOREIGN KEY (player_id) REFERENCES players (id)
            );
            CREATE TABLE IF NOT EXISTS sentences
            (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                sentence   TEXT NOT NULL,
                audio_href TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS games
            (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                done        TINYINT NULL,
                sentence_id INTEGER NOT NULL,
                FOREIGN KEY (sentence_id) REFERENCES sentences (id)
            );
            CREATE TABLE IF NOT EXISTS guesses
            (
                id     INTEGER PRIMARY KEY AUTOINCREMENT,
                game_id INTEGER NOT NULL,
                player_id INTEGER NOT NULL,
                guess  TEXT NOT NULL,
                FOREIGN KEY (game_id) REFERENCES games (id),
                FOREIGN KEY (player_id) REFERENCES players (id)
            );
    `
);