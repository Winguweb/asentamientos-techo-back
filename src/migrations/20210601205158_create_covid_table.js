exports.up = function(knex) {
  return knex.schema
    .createTable('covid', function (table) {  
      table.increments('id');
      table.string('country', 500);
      table.string('province', 500);
      table.string('municipality', 500);
      table.string('name', 500);
      table.string('life_altered', 500);
      table.string('employment_before_quarentine', 500);
      table.string('other_employment_before_quarentine', 500); // Ver
      table.string('employment_status', 500);
      table.string('employment_affected_by_quarentine', 500);
      table.string('other_employment_affected_by_quarentine', 500); // Ver
      table.string('difficulties_daily_life', 500);
      table.string('neighborhood_conditions', 500);
      table.string('neighborhood_daily_situations', 500);
      table.string('home_situation', 500);
      table.string('negatives_home_situations', 500);
      table.string('main_family_needs', 500);
      table.string('government_measures', 500);
      table.string('promoted_measures_applied', 500);
      table.string('are_benefits_received', 500);
      table.string('what_benefits', 500);
      table.string('difficulties_accessing_benefits', 500);
      table.string('activities_developed_frequently', 500);
      table.string('main_need_to_organize', 500);
      table.string('neighborhood_strengths', 500);
      table.string('who_visited_neighborhood', 500);

      table.integer('settlement_id');
    })
  };
    
  exports.down = function(knex) {
    return knex.schema
      .dropTable("covid");
  };
    