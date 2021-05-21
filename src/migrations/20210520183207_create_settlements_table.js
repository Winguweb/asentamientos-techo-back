exports.up = function(knex) {
  return knex.schema
    .createTable('settlements', function (table) {
       table.increments('id');
       table.string('country', 255);
       table.string('province', 255);
       table.string('name', 255).notNullable();
       table.string('municipality', 255);
       table.string('zone', 255);
       table.string('latitud', 255);
       table.string('longitude', 255);
       table.string('altitude', 255);
       table.string('precision', 255);
       table.string('status', 255);
       table.string('population', 255);
       table.string('settlement_start', 255);
       //Global settlement_id
       table.integer('settlement_id');
       //Settlement can exists many times in different polls       
       table.integer('poll_id')
          .unsigned()
          .references('polls.id')
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("settlements");
};
