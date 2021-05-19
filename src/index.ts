const express = require( "express" );
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const { itemsRouter } = require('./routes/items.router');
const { errorHandler } = require('./middleware/error.middleware');
const { notFoundHandler } = require('./middleware/not-found.middleware');

dotenv.config();

if(!process.env.PORT) {
    process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.use(errorHandler);
app.use(notFoundHandler);

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

