import express from 'express';
import pg from '../database/knex';
import { Comparison } from '@src/models/Comparisons';
import ComparisonsService from '@src/services/ComparisonsService';


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

comparisonRouter.post('/:categoryId/:firstId/:secondId/:voteId', async function (req, res) {
  const categoryid = parseInt(req.params.categoryId);
  const firstId = parseInt(req.params.firstId);
  const secondId = parseInt(req.params.secondId);
  const voteId = parseInt(req.params.voteId);
  console.log("firstId: " + firstId);
  console.log("secondId: " + secondId);
  const comparison: Comparison = await ComparisonsService.incrementComparisonByFirstSubjectIdAndSecondSubjectId(categoryid, firstId, secondId, voteId);
  res.send(comparison)
});

export default comparisonRouter;
