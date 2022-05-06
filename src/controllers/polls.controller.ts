import { Request, Response } from 'express';
import knex from '../db';

import { cleanPoll } from '../services/polls/delete.service'

export const index = async (req: Request, res: Response) => {
  try {
    const polls : Object = await knex('polls').orderBy('date', 'desc')
    res.json(polls)
  } catch (err: any){
    console.log('there was an error');
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  try {
    await cleanPoll(req.body.year);
    
    const polls : Object = await knex('polls').orderBy('date', 'desc')
    res.json(polls)
  } catch (err: any){
    console.log('there was an error');
    res.json(err)
  }
}

export const updateDate = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    await knex('polls')
      .where('date', req.body.year)
      .update({
        last_update: req.body.lastUpdate
      })

    
    // req.body.lastUpdate
    res.json()
  } catch (err: any){
    console.log('there was an error');
    res.json(err)
  }
}