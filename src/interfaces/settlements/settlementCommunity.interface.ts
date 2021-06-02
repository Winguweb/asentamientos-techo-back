export interface SettlementCommunity {
  readonly id: number;
  local_society?: boolean;
  local_committee?: boolean;
  sports_team?: boolean;
  cultural_group?: boolean;
  cooperatives?: boolean;
  religious_group?: boolean;
  none?: boolean;
  no_answer?: boolean;  
  settlement_id: number;
  poll_id: number;
}