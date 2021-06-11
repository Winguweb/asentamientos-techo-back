import { Request, Response } from 'express';
import knex from '../db';

// import ICovid from '../interfaces/covid/covid.interface'

// GET
export const read = async (req: Request, res: Response) => {
  const result = await knex
    .select('*')
    .from('covid')
        
  res.json({
      data: result
  });
}

const cleanPoll = async() => {
  try {  
    await knex('covid')
      .del()      
  } catch (err:any){
    console.log('e', err)
  }  
}

// POST
export const create = async (req: Request, res: Response) => {
  try {
    
    cleanPoll();

    const data : Array<object> = req.body.data;
    
    data.forEach(async (d: any) => {

      let covidData:any = d;

      if(!covidData.settlement_id) return;

      // Add row.
      await knex('covid').insert(covidData);
    })
  } catch (err:any) {
      console.log("there was an error");
      console.log(err)
      res.json(err)
    }
  res.json();
}

export const exportCovid = async (req: Request, res: Response) => {
  const result = await knex
    .select('*')
    .from('covid')

  res.json({
      data: result
  });
}