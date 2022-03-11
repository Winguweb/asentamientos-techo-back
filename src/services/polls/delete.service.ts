import knex from '../../db';

export const cleanPoll = async(pollYear : string) => {
  try {
    const poll : Array<any>  = await knex('polls')
      .where('date', pollYear)

    if (poll.length === 0) {
      return
    }

    const pollIds = poll.map(p => p.id)

    await knex('settlement_features')
      .whereIn('poll_id', pollIds)
      .del()

    await knex('settlement_public_services')
      .whereIn('poll_id', pollIds)
      .del()

    await knex('settlement_issues')
      .whereIn('poll_id', pollIds)
      .del()

    await knex('settlement_communities')
      .whereIn('poll_id', pollIds)
      .del()

    await knex('settlements')
      .whereIn('poll_id', pollIds)
      .del()
    
    await knex('polls')
      .whereIn('id', pollIds)
      .del()    

  } catch (err:any){
    console.log('e', err)
  }  
}