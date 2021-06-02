export interface SettlementFeature {
  readonly id: number;
  migrand_population?: string;
  migrant_type?: string;
  walls_material?: string;
  roofs_material?: string;
  water_access?: string;
  energy_access?: string;
  draining_access?: string;
  waste_access?: string;
  public_light_access?: string;
  streets_material?: string;
  settlement_id: number;
  poll_id: number;
}