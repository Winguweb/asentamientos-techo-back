exports.up = function(knex) {
    return knex.schema.table('polls', table => {
        table.string('last_update', 255);
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.table('polls', table => {
        table.string('last_update', 255);
    })
  };
      