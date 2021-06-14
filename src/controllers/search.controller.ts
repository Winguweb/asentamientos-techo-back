import { Request, Response } from 'express';
import knex from '../db';

import ISettlement from '../interfaces/settlements/settlement.interface'

export const search = async (req: Request, res: Response) => {
  const q:string = req.query.q as string;

  const result: Array<ISettlement> = 
    await knex('settlements')
    .where('name', 'like', `%${q}%`)
    .select('id', 'name', 'country', 'province', 'municipality', 'zone', 'latitud', 'longitude', 'status', 'population')

  res.json(result);
}

export const searchCovid = async (req: Request, res: Response) => {
  const q:string = req.query.q as string;

  const result: Array<ISettlement> = 
    await knex('settlements')
    .where('settlements.name', 'like', `%${q}%`)
    .distinctOn('settlements.name')
    .join('covid', 'covid.settlement_id', '=', 'settlements.settlement_id')
    .select('settlements.name', 
      'settlements.settlement_id', 
      'settlements.country', 
      'settlements.province', 
      'settlements.municipality', 
      'settlements.zone', 
      'settlements.latitud', 
      'settlements.longitude', 
      'settlements.status', 
      'settlements.population'
    )

  res.json(result);
}
