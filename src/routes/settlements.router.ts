import express from 'express';
import { store, index, getSettlementDetails, exportSettlements, covidSettls } from '../controllers/settlements.controller';


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);
settlementsRouter.get('/', index);
settlementsRouter.get('/details', getSettlementDetails)
settlementsRouter.get('/covid-settls', covidSettls);
settlementsRouter.get('/export', exportSettlements)
