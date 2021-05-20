import { Knex } from "knex";


exports.up = function(knex: any, Promise: any) {
    return knex.schema.createTable('users', function(table: any) {
      table.increments('id');
      table.string('email').notNullable();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex: any, Promise: any) {
    return knex.schema.dropTable('users');
  }

