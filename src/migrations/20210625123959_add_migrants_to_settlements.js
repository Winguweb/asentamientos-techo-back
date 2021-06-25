exports.up = function(knex) {
    return knex.schema.table('settlement_features', table => {
        table.string('returned_migrants', 255);
        table.string('country_people_returned', 255);
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.table('settlement_features', table => {
        table.string('returned_migrants', 255);
        table.string('country_people_returned', 255);
    })
  };
      