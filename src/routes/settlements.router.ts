import express from 'express';
<<<<<<< HEAD
import { store, index } from '../controllers/settlements.controller';
=======
import { store, read, index } from '../controllers/settlements.controller';
>>>>>>> 2063b9c88daeacde2320fd492271680a3dd238e9


export const settlementsRouter = express.Router();

settlementsRouter.post('/', store);
<<<<<<< HEAD
settlementsRouter.get('/', index);
=======
settlementsRouter.get('/', read);
settlementsRouter.get('/index', index);
>>>>>>> 2063b9c88daeacde2320fd492271680a3dd238e9
