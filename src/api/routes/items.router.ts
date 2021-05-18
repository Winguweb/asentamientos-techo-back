import express, { Request, Response } from 'express';
import * as ItemService from '../../services/items.service';
import { BaseItem, Item } from '../../interfaces/items/item.interface'
import { checkJwt } from '../middleware/authz.middleware';
import { checkPermissions } from "../middleware/permissions.middleware";
import { ItemPermission } from "../../enums/item-permission";

export const itemsRouter = express.Router();

// GET items
itemsRouter.get('/', async(req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();    

    res.status(200).send(items);

  } catch (err) {

    res.status(500).send(err.message)

  }
})

// GET items/:id
itemsRouter.get('/:id', async(req: Request, res: Response) => {

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

itemsRouter.use(checkJwt);

// POST items
itemsRouter.post(
  "/",
  checkPermissions(ItemPermission.CreateItems),
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
itemsRouter.put(
  "/:id",
  checkPermissions(ItemPermission.UpdateItems),
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
itemsRouter.delete(
  "/:id",
  checkPermissions(ItemPermission.DeleteItems),
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