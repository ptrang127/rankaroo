import express from 'express';
import pg from '../database/knex';
import { Comparison } from '@src/models/Comparisons';


const comparisonRouter = express.Router();

// Define routes
comparisonRouter.get('/', async function (req, res) {
  const comparisons: Comparison[] = await pg('comparisons').select('*');
  res.send(comparisons);
});

comparisonRouter.get('/:id', async function (req, res) {
  const comparisonId = req.params.id;
  const comparison: Comparison = await pg('comparisons').where({id: comparisonId}).first('*');
  res.send(comparison);
});

export default comparisonRouter;
