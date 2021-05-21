exports.up = function(knex) {
  return knex.schema
    .createTable('settlement_public_services', function (table) {
       table.increments('id');
       table.string('kindergarten_access', 255);
       table.string('primary_school_access', 255);
       table.string('secondary_school_access', 255);
       table.string('parks_access', 255);
       table.string('police_access', 255);
       table.string('firestation_access', 255);
       table.string('hospital_access', 255);
      
       table.integer('settlement_id')
          .unsigned()
          .references('settlements.id')
       table.integer('poll_id')
        .unsigned()
        .references('polls.id')
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("settlement_public_services");
};
