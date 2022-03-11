import { Request, Response } from 'express';
import knex from '../db';

// services 
import { cleanPoll } from '../services/polls/delete.service';
// Profile

// GET
export const read = async (req: Request, res: Response) => {
  const result = await knex
    .select('*')
    .from('settlements')
        
  res.json({
      data: result
  });
}

export const covidSettls = async(req: Request, res: Response) => {
  const covidMarkers : Object = await knex('covid')
    .distinctOn('covid.settlement_id')
    .select(
      'settlements.latitud as settlement_latitude', 
      'settlements.longitude as settlement_longitude', 
      'covid.name',
      'covid.settlement_id',
      'covid.latitude as covid_latitude', 
      'covid.longitude as covid_longitude', 
      'covid.country',
      'covid.province'
    )    
    .leftJoin('settlements', 'covid.settlement_id', '=', 'settlements.settlement_id')
    .where((builder: any) => {
      Object.keys(req.query).forEach(element => {
        builder.whereIn(element, req.query[element])          
      });
    })

  // const covidData : Object = await knex('covid')

  res.json({
    // covidData: covidData,
    covidMarkers: covidMarkers,
  })
}

export const store = async (req: Request, res: Response) => {

  try {

    await cleanPoll(req.body.year);

    await knex.transaction(async (trx: any) => {
      const pollId : Array<string> = await trx('polls')
        .returning('id')
        .insert(
          {
            date: req.body.year
          }
        );

      const data : Array<object> = req.body.data;
      const batchRes = await Promise.all(data.map(async (d : any) => {
        let generalData : any = d.generalData;
        generalData['poll_id'] = pollId[0];

        const settlementId : Array<string> = await trx('settlements')
          .returning('id')
          .insert(generalData);

        const featuresData : any = d.featuresData;
        featuresData['poll_id'] = pollId[0];
        featuresData['settlement_id'] = settlementId[0];         
        await trx('settlement_features').insert(featuresData);

        const publicServicesData : any  = d.publicServicesData;
        publicServicesData['poll_id'] = pollId[0];
        publicServicesData['settlement_id'] = settlementId[0];         
        await trx('settlement_public_services').insert(publicServicesData);

        const issuesData : any  = d.issuesData;
        issuesData['poll_id'] = pollId[0];
        issuesData['settlement_id'] = settlementId[0];         
        await trx('settlement_issues').insert(issuesData);

        const communitiesData : any  = d.communitiesData;
        communitiesData['poll_id'] = pollId[0];
        communitiesData['settlement_id'] = settlementId[0];         
        await trx('settlement_communities').insert(communitiesData);
      }))
    })
    res.json();
  } catch (err: any) {
    console.log('there was an error');
    console.log(err)
    res.status(500).json(err)
    return
  }    
}

export const index = async (req: Request, res: Response) => {
  try {         
    const settlements : Object = await knex.select(
      'settlements.id as base_id', 
      'settlements.settlement_id as base_settlement_id', 
      'settlements.*', 
      'settlement_features.*', 
      'settlement_issues.*', 
      'settlement_communities.*', 
      'settlement_public_services.*'
    )
      .from('settlements')
      .leftJoin('settlement_features', 'settlements.id', '=', 'settlement_features.settlement_id')
      .leftJoin('settlement_issues', 'settlements.id', '=', 'settlement_issues.settlement_id')
      .leftJoin('settlement_communities', 'settlements.id', '=', 'settlement_communities.settlement_id')
      .leftJoin('settlement_public_services', 'settlements.id', '=', 'settlement_public_services.settlement_id')
      .where((builder: any) => {
        Object.keys(req.query).forEach(element => {
          builder.whereIn(element, req.query[element])          
        });
      })


    res.json(settlements);
  } catch (err: any) {
    console.log('there was an error');
    console.log(err)
    res.json(err)
  }  
}

export const exportSettlements = async (req: Request, res: Response) => {
  try {     
    const poll_id = req.query.poll
    const settlements : Object = await knex('settlements')
      .join('settlement_features', 'settlements.id', '=', 'settlement_features.settlement_id')
      .join('settlement_issues', 'settlements.id', '=', 'settlement_issues.settlement_id')
      .join('settlement_communities', 'settlements.id', '=', 'settlement_communities.settlement_id')
      .join('settlement_public_services', 'settlements.id', '=', 'settlement_public_services.settlement_id')
      .where('settlements.poll_id', poll_id)

    res.json(settlements);
  } catch (err: any) {
    console.log('there was an error');
    console.log(err)
    res.json(err)
  }  
}

