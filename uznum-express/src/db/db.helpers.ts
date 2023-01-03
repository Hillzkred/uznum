import sqlite3, {Database} from "sqlite3"
import config from "config";

const dbFileName:string = config.get("db.fileName");

export const connectDB = () => {
    const sqlite = sqlite3.verbose();
    return new sqlite.Database(dbFileName, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
}

export const run = (sql: string) => {
    const db = connectDB();
    db.serialize(() => {
        db.run(sql, (err) => {
            if (err) {
                console.error("sql failed")
                console.error(err.message);
            }
            console.log('sql success table.');
        })
    })
    closeDB(db);
}

export const closeDB = (db: Database) => {
    db.close((err => {
        if (err) {
            console.error(err.message);
        }
    }))
}
