//  import * as mysql from "mysql";
 import mysql from "mysql";

//will be put inside a env file upon production. The env file will hide the sensitive info.
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: "recallit",
    user: 'recalluser',
    password: 'recall123'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

import saved from "./saveditemsdb";
import suggest from "./suggestionsdb";
import user from "./usersdb";


// This becomes the db objects in the routes/saveditems, routes/suggest, routes/users files.
export default {
   saved,
   suggest,
   user
}