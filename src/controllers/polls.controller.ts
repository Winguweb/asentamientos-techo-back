import { Request, Response } from 'express';
import knex from '../db';


export const index = async (req: Request, res: Response) => {
  try {
    const polls : Object = await knex('polls').orderBy('date', 'desc')
    res.json(polls)
  } catch (err: any){
    console.log('there was an error');
    res.json(err)
  }
}