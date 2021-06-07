import { Request, Response } from 'express';
import knex from '../db';

import ISettlement from '../interfaces/settlements/settlement.interface'

export const search = async (req: Request, res: Response) => {
  const q:string = req.query.q as string;

  const result: Array<ISettlement> = 
    await knex('settlements')
    .where('name', 'like', `%${q}%`)
    .select('name', 'country', 'province', 'municipality', 'zone', 'latitud', 'longitude', 'status', 'population')

  res.json(result);
}
