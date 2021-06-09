import express from 'express';
import { store, index, exportSettlements } from '../controllers/settlements.controller';


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);
settlementsRouter.get('/', index);
settlementsRouter.get('/export', exportSettlements)
