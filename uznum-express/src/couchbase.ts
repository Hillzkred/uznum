import couchbase from 'couchbase';
import config from "config";

export const setupCouchbase = async () => {
    const cluster = await couchbase.connect(config.get("db.host"), {
        username: config.get("db.user"),
        password: config.get("db.password")
    });
    const bucket = cluster.bucket(config.get("db.bucket"));
    return bucket.scope(config.get("db.scope"));
}