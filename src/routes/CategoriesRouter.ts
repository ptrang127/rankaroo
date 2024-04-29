import express from 'express';
import pg from '../database/knex';
import { Category } from '@src/models/Categories';


const categoryRouter = express.Router();

categoryRouter.use(express.json());

// Define routes
categoryRouter.get('/', async function (req, res) {
  const categories: Category[] = await pg('categories').select('*');
  res.send(categories);
});

categoryRouter.get('/:id', async function (req, res) {
  const categoryId = req.params.id;
  const category: Category = await pg('categories').where({id: categoryId}).first('*');
  res.send(category);
});

export default categoryRouter;
