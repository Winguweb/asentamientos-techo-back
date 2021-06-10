import express from 'express';
import { store, index, exportSettlements, covidSettls } from '../controllers/settlements.controller';


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);
settlementsRouter.get('/', index);
settlementsRouter.get('/covid-settls', covidSettls);
settlementsRouter.get('/export', exportSettlements)
