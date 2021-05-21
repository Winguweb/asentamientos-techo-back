exports.up = function(knex) {
  return knex.schema
    .createTable('settlement_communities', function (table) {
       table.increments('id');      
       table.boolean('local_society');
       table.boolean('local_committee');
       table.boolean('sports_team');
       table.boolean('cultural_group');
       table.boolean('cooperatives');
       table.boolean('religious_group');
       table.boolean('none');
       table.boolean('no_answer');       
      
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
      .dropTable("settlement_communities");
};
