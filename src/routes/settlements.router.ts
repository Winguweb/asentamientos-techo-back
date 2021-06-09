import express from 'express';
import { store, index } from '../controllers/settlements.controller';


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);
settlementsRouter.get('/', index);
