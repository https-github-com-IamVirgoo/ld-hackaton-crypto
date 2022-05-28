/**
 * Put here all required functions to work with users
 * 
 * ! Requires:
 * * PouchDB turned on
 * * cookies
 * * jsonwebtokens
 */
import PouchDB from "pouchdb";
import jsonwebtoken from "jsonwebtoken";
import { parse, serialize } from 'cookie';


// TODO impement here auth by JWT cookie
export function get(cookie = null) {
    return 200;
};


// TODO implemet when will done database setup
export function post(login = null, pwd = null,) {
    return "COOOKIES????";
}