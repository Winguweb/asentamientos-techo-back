import express from 'express';
import { index } from '../controllers/polls.controller';


export const pollsRouter = express.Router();

pollsRouter.get('/', index);