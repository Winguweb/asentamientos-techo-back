import express from 'express';
import { index, destroy } from '../controllers/polls.controller';


export const pollsRouter = express.Router();

pollsRouter.post('/delete', destroy);
pollsRouter.get('/', index);