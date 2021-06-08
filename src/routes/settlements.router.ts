import express from 'express';
import { store, read, index } from '../controllers/settlements.controller';


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);
settlementsRouter.get('/', read);
settlementsRouter.get('/index', index);