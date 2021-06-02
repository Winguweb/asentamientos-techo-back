exports.up = function(knex) {
    return knex.schema
      .createTable('covid', function (table) {  
        table.increments('id');   
        table.string('life_altered', 255);
        table.string('employment_before_quarentine', 255);
        table.string('other_employment_before_quarentine', 255); // Ver
        table.string('employment_status', 255);
        table.string('employment_affected_by_quarentine', 255);
        table.string('other_employment_affected_by_quarentine', 255); // Ver
        table.string('difficulties_daily_life', 255);
        table.string('neighborhood_conditions', 255);
        table.string('neighborhood_daily_situations', 255);
        table.string('home_situation', 255);
        table.string('negatives_home_situations', 255);
        table.string('main_family_needs', 255);
        table.boolean('government_measures', 255);
        table.string('promoted_measures_applied', 255);
        table.boolean('are_benefits_received', 255);
        table.string('what_benefits', 255);
        table.boolean('difficulties_accessing_benefits', 255);
        table.string('activities_developed_frequently', 255);
        table.string('main_need_to_organize', 255);
        table.string('neighborhood_strengths', 255);
        table.string('who_visited_neighborhood', 255);
  
        table.integer('settlement_id');
      })
  };
    
    exports.down = function(knex) {
      return knex.schema
        .dropTable("covid");
    };
    