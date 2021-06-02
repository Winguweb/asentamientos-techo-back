import express, { Request, Response } from 'express';
import { read, create } from '../controllers/covid.controller'

export const covidRouter = express.Router();

covidRouter.get('/', read);
covidRouter.post('/new', create);