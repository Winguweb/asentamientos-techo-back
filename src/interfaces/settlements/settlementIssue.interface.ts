export interface SettlementIssue {
  readonly id: number;
  natural_disasters?: string;
  settlement_limits?: string;
  bad_roads?: boolean;
  bad_housing?: boolean;
  housing_fires?: boolean;
  insecurity?: boolean;
  drugs?: boolean;
  alcoholism?: boolean;
  unemployment?: boolean;
  violence?: boolean;
  insalubrity?: boolean;
  murder?: boolean;
  rape?: boolean;
  kidnapping?: boolean;
  assault?: boolean;
  property_damage?: boolean;
  fighting?: boolean;
  none?: boolean;
  settlement_id: number;
  poll_id: number;
}