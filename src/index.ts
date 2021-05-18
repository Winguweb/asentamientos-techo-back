import knex from './db'

const express = require( "express" );
const app = express();
const port = 8080; // default port to listen
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
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

