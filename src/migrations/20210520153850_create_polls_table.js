exports.up = function(knex) {
  return knex.schema
    .createTable('polls', function (table) {
       table.increments('id');
      //  table.string('name', 255).notNullable();
       table.string('date', 255).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("polls");
};
