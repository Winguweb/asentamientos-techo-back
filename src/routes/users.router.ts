import express, { Request, Response } from 'express';
import * as ItemService from '../services/items.service';
import { BaseItem, Item } from '../interfaces/items/item.interface'
import { checkJwt } from '../middleware/authz.middleware';

export const usersRouter = express.Router();

// GET items
usersRouter.get('/', async(req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();    

    res.status(200).send(items);

  } catch (err) {

    res.status(500).send(err.message)

  }
})

// GET items/:id
usersRouter.get('/:id', async(req: Request, res: Response) => {

  const id: number = parseInt(req.params.id, 10)

  try {
    const item: Item = await ItemService.find(id)

    if(item) {
      return res.status(200).send(item)
    }

    res.status(404).send("item not found");

  } catch (err) {
    res.status(500).send(err.message)
  }
})

usersRouter.use(checkJwt);

// POST items
usersRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;

      const newItem = await ItemService.create(item);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

// PUT items/:id
usersRouter.put(
  "/:id",
  async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
      const itemUpdate: Item = req.body;

      const existingItem: Item = await ItemService.find(id);

      if (existingItem) {
        const updatedItem = await ItemService.update(id, itemUpdate);
        return res.status(200).json(updatedItem);
      }

      const newItem = await ItemService.create(itemUpdate);

      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

// DELETE items/:id
usersRouter.delete(
  "/:id",
  async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await ItemService.remove(id);

      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);