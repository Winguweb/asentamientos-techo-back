exports.up = function(knex) {
  return knex.schema.table('covid', table => {
    table.string('latitude', 500);
    table.string('longitude', 500);
  })
}

exports.down = function(knex) {
  return knex.schema.table('covid', table => {
    table.dropColumn("latitude")
    table.dropColumn("longitude");
  })
};
    