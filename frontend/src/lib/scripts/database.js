// Database
import {decode, sign} from "jsonwebtoken";
import PouchDB from "pouchdb";

const db = new PouchDB("User", {skip_setup: true});
const key = "SETUP_MY_KEY";

export const is_existing = async (login) => db.is_existing(login);
export const reg = async (login, password) => {
    if (is_existing(login)) {
        return 404;
    }
    db.signUp(login, password);
    return sign({login: login, password: password}, key, { algorithm: 'RS256' });
};

export const log = async (jwt) => {
    try {
        let data = decode(jwt);
        return 200;
    
    } catch (err) {
        return 404;
    }
};
