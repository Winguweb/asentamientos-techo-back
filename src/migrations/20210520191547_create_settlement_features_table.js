exports.up = function(knex) {
  return knex.schema
    .createTable('settlement_features', function (table) {
       table.increments('id');
       table.string('migrant_population', 255);
       table.string('migrant_type', 255);
       table.string('walls_material', 255);
       table.string('roofs_material', 255);
       table.string('floors_material', 255);
       table.string('water_access', 255);
       table.string('energy_access', 255);
       table.string('draining_access', 255);
       table.string('waste_access', 255);
       table.string('public_light_access', 255);
       table.string('streets_material', 255);      
       
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
      .dropTable("settlement_features");
};
