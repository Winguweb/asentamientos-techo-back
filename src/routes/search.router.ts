import express, { Request, Response } from 'express';

import { search, searchCovid } from '../controllers/search.controller'


export const searchRouter = express.Router();

searchRouter.get('/', search);
searchRouter.get('/covid', searchCovid);