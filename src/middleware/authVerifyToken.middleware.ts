import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { CustomRequest } from '../interfaces/custom/customRequest'

interface IPayload {
  id: number;
  iat: number;
  exp: number;
}

export const tokenValidation = (customReq: Request, res: Response, next: NextFunction) => {
  const token = customReq.header('Authorization')
  const secretKey: string = process.env.SECRET_KEY

  if(!token) return res.status(401).json('Access denied.')

  const payload = jwt.verify(token, secretKey) as IPayload;
  
  const req = customReq as CustomRequest;
  req.userId = payload.id;
  
  next();
}