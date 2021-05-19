console.log('db')
console.log(process.env.NODE_ENV)
console.log(process.env.DATABASE_URL)


const environment = process.env.ENVIRONMENT || 'development'
const config = require('../../knexfile.ts')[environment];
const knex = require('knex')(config);

if (process.env.NODE_ENV === 'staging') {
  knex.migrate.latest([config]);
}

export default knex
