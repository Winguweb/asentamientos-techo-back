import { Request, Response } from 'express';
import knex from '../db';

// import { User } from '../interfaces/users/users.interface';
// Profile

const cleanPoll = async(pollYear : string) => {
  try {
    const poll : Array<any>  = await knex('polls')
      .where('date', pollYear)

    if (poll.length === 0) {
      return
    }

    await knex('settlement_features')
      .where('poll_id', poll[0].id)
      .del()

    await knex('settlement_public_services')
      .where('poll_id', poll[0].id)
      .del()

    await knex('settlement_issues')
      .where('poll_id', poll[0].id)
      .del()

    await knex('settlement_communities')
      .where('poll_id', poll[0].id)
      .del()

    await knex('settlements')
      .where('poll_id', poll[0].id)
      .del()
    
    await knex('polls')
      .where('id', poll[0].id)
      .del()    

  } catch (err:any){
    console.log('e', err)
  }  
}

export const store = async (req: Request, res: Response) => {

  //TODO update existing

  try {

    cleanPoll(req.body.year);

    const pollId : Array<string> = await knex('polls')
      .returning('id')
      .insert(
        {
          date: req.body.year
        }
      );

    const data : Array<object> = req.body.data;
    data.forEach(async (d : any) => {
      let generalData : any = d.generalData;
      generalData['poll_id'] = pollId[0];

      const settlementId : Array<string> = await knex('settlements')
        .returning('id')
        .insert(generalData);

      const featuresData : any = d.featuresData;
      featuresData['poll_id'] = pollId[0];
      featuresData['settlement_id'] = settlementId[0];         
      await knex('settlement_features').insert(featuresData);

      const publicServicesData : any  = d.publicServicesData;
      publicServicesData['poll_id'] = pollId[0];
      publicServicesData['settlement_id'] = settlementId[0];         
      await knex('settlement_public_services').insert(publicServicesData);

      const issuesData : any  = d.issuesData;
      issuesData['poll_id'] = pollId[0];
      issuesData['settlement_id'] = settlementId[0];         
      await knex('settlement_issues').insert(issuesData);

      const communitiesData : any  = d.communitiesData;
      communitiesData['poll_id'] = pollId[0];
      communitiesData['settlement_id'] = settlementId[0];         
      await knex('settlement_communities').insert(communitiesData);
    });    


  } catch (err: any) {
    console.log('there was an error');
    console.log(err)
    res.json(err)
  }  

  res.json();
}