import {reg, log} from '$lib/scripts/database';
import { serialize } from 'cookie';



export async function post({body: {login, password}}) {
	let res = reg(login, password);
    if (res == 404) {
        return {
            status: 205,
            body: {
                message: "Something went wrong!"
            }
        }
    }
    return {
        headers: {
            'Set-Cookie': serialize('sessionId', res, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7
            }),
        },
        body: {
            message: "Successfull"
        }
    }
};


export async function get({headers: {cookie}}) {
    return {
        status: 200,
        headers: {
            'Set-Cookie': serialize('sessionId', '',
            {
                path: '/',
                export: new Date(0)
            }),
        }
    }
};