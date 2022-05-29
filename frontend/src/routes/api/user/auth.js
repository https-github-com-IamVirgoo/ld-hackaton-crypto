import PouchDB from "pouchdb";
import {serialize, parse} from "cookie";
import {decode, sign} from "jsonwebtoken";
import { v4 } from "uuid";

let db = new PouchDB("users");
const JWTKEY = "JWTSECRETKEY";


/**
 * Get the user by login, password
 */
export const get = async (request) => {
    const body = await request.json;
    console.log(request);
    db.allDocs({
        include_docs: true
      }).then(function (result) {
        var docs = result.rows.map(function (row) {
          return row.doc;
        });
        console.log(docs);
      }).catch(function (err) {
        console.log(err);
      });
};


/**
 * Append new user
 */
export const post = async (event) => {
    let body = await event.request.formData();
    let result = {}
    body = Object.fromEntries(body);
    result = db.query((doc, emit) => {emit(doc._id)}, {key: body.login})
        .then((res) => {
            if (res.total_rows != 0) {
                // User exists
                return {
                    status: 200,
                    body: {
                        message: "User alrady exist!",
                    }
                }
            } else {
                const id = v4();
                // User not exists
                db.put({
                    _id: body.login,
                    pwd: body.pwd,
                    wallets: [],
                    sessions: [id],
                    transactions: [],
                });
                return {
                    status: 302,
                    headers: {
                        'set-cookie': serialize('result', id, {
                            path: '/',
                            sameSite: 'strict',
                            httpOnly: true,
                            maxAge: 60 * 60 * 24 * 7
                        }),
                        redirected: true,
                        redirect: '/home',
                    },
                };
            }
        })
    return result;
};


/**
 * Update new info about user
 */
export async function put() {

};