//
export interface ICovid {
  readonly id: number;
  settlement_id: number;
  employment_before_quarentine?: string;
  other_employment_before_quarentine?: string;
  employment_status?: string;
  employment_affected_by_quarentine?: string;
  other_employment_affected_by_quarentine?: string;
  difficulties_daily_life?: string;
  neighborhood_conditions?: string;
  neighborhood_daily_situations?: string;
  home_situation?: string;
  negatives_home_situations?: string;
  main_family_needs?: string;
  government_measures?: boolean;
  promoted_measures_applied?: string;
  are_benefits_received?: boolean;
  what_benefits?: string;
  difficulties_accessing_benefits?: boolean;
  activities_developed_frequently?: string;
  main_need_to_organize?: string;
  neighborhood_strengths?: string;
  who_visited_neighborhood?: string;
}