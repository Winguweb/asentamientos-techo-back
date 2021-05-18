console.log('db')
console.log(process.env.NODE_ENV)
console.log(process.env.DB_HOST)

const pg = require('pg');
pg.defaults.ssl = true;


const knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
});


export default knex