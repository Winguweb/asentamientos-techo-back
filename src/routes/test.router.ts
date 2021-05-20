
import express from 'express';
import knex from '../db/index'

export const testRouter = express.Router();

testRouter.get('/', async (req: any, res: any) => {
    const result = await knex
        .select('*')
        .from('users')
        
    res.json({
        users: result
    });
});