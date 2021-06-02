export interface Settlement {
  readonly id: number;
  country?: string;
  province?: string;
  name: string;
  municipality?: string;
  zone?: string;
  latitud?: string;
  longitude?: string;
  altitude?: string;
  precision?: string;
  status?: string;
  population?: string;
  settlement_start?: string;
  settlement_id: number;
  poll_id: number;
}