exports.up = function(knex) {
  return knex.schema
    .createTable('settlement_issues', function (table) {
       table.increments('id');
       table.string('natural_disasters', 255);
       table.string('settlement_limits', 255);
       table.boolean('bad_roads');
       table.boolean('bad_housing');
       table.boolean('housing_fires');
       table.boolean('insecurity');
       table.boolean('drugs');
       table.boolean('alcoholism');
       table.boolean('unemployment');
       table.boolean('violence');
       table.boolean('insalubrity');
       table.boolean('murder');
       table.boolean('rape');
       table.boolean('kidnapping');
       table.boolean('assault');
       table.boolean('property_damage');
       table.boolean('fighting');
       table.boolean('none');
      
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
      .dropTable("settlement_issues");
};
