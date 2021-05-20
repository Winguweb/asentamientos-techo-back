import express, { Request, Response } from 'express';
import { signup, signin, profile } from '../auth/auth.controller'
import { tokenValidation } from '../middleware/authVerifyToken.middleware'


export const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/profile', tokenValidation, profile);