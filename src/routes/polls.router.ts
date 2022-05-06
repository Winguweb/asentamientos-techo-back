import express from 'express';
import { index, destroy, updateDate } from '../controllers/polls.controller';


export const pollsRouter = express.Router();

pollsRouter.post('/delete', destroy);
pollsRouter.post('/update-date', updateDate)
pollsRouter.get('/', index);