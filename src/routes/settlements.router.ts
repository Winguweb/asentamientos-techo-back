import express from 'express';
import { store } from '../controllers/settlements.controller';


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);