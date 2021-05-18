const express = require( "express" );
const app = express();
const port = 8080; // default port to listen

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import knex from './db'

console.log(process.env.NODE_ENV)
console.log(process.env.DB_HOST)

app.use(express.static("build"))

// define a route handler for the default home page
app.get( "/", ( req : any , res : any ) => {
    res.send( "Hello world" );
} );

app.get('/test', async (req: any, res: any) => {
    const result = await knex
        .select('first_name')
        .from('users')
    res.json({
        users: result
    });
});

// start the Express server
app.listen(process.env.PORT || port, () => {
    console.log( `server started ${ port }` );
} );

