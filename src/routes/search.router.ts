import express, { Request, Response } from 'express';

import { search } from '../controllers/search.controller'


export const searchRouter = express.Router();

searchRouter.get('/', search);