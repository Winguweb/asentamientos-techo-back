import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

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
  
  req.userId = payload.id;
  
  next();
}