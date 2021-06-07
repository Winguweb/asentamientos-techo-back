
const express = require( "express" );
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

const { testRouter } = require('./routes/test.router');
const { authRouter } = require('./routes/auth.router')
const { settlementsRouter } = require("./routes/settlements.router");
const { searchRouter } = require('./routes/search.router')

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

// Routes
app.use('/auth', authRouter);
app.use('/settlements', settlementsRouter);
app.use("/test", testRouter);
app.use('/search', searchRouter)

app.use(errorHandler);
app.use(notFoundHandler);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log(process.env.NODE_ENV)
console.log(process.env.DB_HOST)

app.use(express.static("build"))

// define a route handler for the default home page
app.get( "/", ( req : any , res : any ) => {
    res.send( "Hello world" );
} );

// start the Express server
app.listen(process.env.PORT || port, () => {
    console.log( `server started ${ port }` );
} );

