if (process.env.NODE_ENV !== 'staging') {
  require('dotenv').config();
}

module.exports = {

  development: {
    client: "postgresql",
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './src/migrations'
    }
  },

  staging: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: false,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './src/migrations'
    }
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: false,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: './src/migrations'
    }
  }
};
