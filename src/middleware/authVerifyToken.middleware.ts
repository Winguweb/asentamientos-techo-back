import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { isRegExp } from 'util';

interface IPayload {
  id: number;
  iat: number;
  exp: number;
}

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')
  const secretKey: string = process.env.SECRET_KEY!

  if(!token) return res.status(401).json('Access denied.')

  const payload = jwt.verify(token, secretKey) as IPayload;

  if(Date.now() >= payload.exp * 1000) return res.status(500).json({ "message": "Token expired" })

  req.userId = payload.id;
  
  next();
}