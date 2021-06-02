export interface SettlementPublicService {
  readonly id: number;
  kindergarten_access?: string;
  primary_school_access?: string;
  secondary_school_access?: string;
  parks_access?: string;
  police_access?: string;
  firestation_access?: string;
  hospital_access?: string;
  settlement_id: number;
  poll_id: number;
}