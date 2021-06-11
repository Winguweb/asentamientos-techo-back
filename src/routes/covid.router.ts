import express, { Request, Response } from 'express';
import { read, create, exportCovid, show } from '../controllers/covid.controller'

export const covidRouter = express.Router();

covidRouter.get('/', read);
covidRouter.get('/export', exportCovid);
covidRouter.post('/new', create);
covidRouter.get('/show', show)