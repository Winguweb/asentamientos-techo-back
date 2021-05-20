import { Request, Response } from 'express';
import knex from '../db/index';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { CustomRequest } from '../interfaces/custom/customRequest'

// Signup
export const signup = async (req: Request, res: Response) => {
  const secretKey: string = process.env.SECRET_KEY;

  const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }

  const newUser = {
    email: req.body.email,
    username: req.body.username,
    password: await encryptPassword(req.body.password)
  }

  const savedUser = knex
      .select('username')
      .from('users')
      .where('username', req.body.username)
      .andWhere('email', req.body.email)
      .then(userNametList => {
        if (userNametList.length === 0) {
            res.json(newUser)
            return knex('users').insert(newUser)
        }
        return res.json('User already exists.')
      })

  const token: string = jwt.sign({ id: savedUser.id  }, secretKey, {
    expiresIn: 60 * 60 * 24 * 30
  });

  res.header('Authorization', token)
}

// Signin
export const signin = async (req: Request, res: Response) => {

  const secretKey: string = process.env.SECRET_KEY

  const user = await knex('users').where({ email: req.body.email })

  if(user.length === 0) return res.status(400).json('Invalid email.')

  const correctPassword = await knex('users').where({ password: req.body.password })

  if(correctPassword.length === 0 ) return res.status(400).json('Invalid password')

  // Para user[0].id tener en cuenta que la db devuelve un array con 1 solo objeto.
  const token: string = jwt.sign({ id: user[0].id }, secretKey, {
    expiresIn: 60 * 60 * 24 * 30
  });

  res.header('Authorization', token).json('Succesfully signed up.');
}

// Profile
export const profile = async (customReq: Request, res: Response) => {

  const req = customReq as CustomRequest;

  const user = await knex
    .select('id', 'email', 'username')
    .from('users')
    .where({ id: req.userId })

  if(!user) return res.status(404).json('No users found.');

  res.json(user);
}