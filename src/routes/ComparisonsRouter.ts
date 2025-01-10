import express from 'express';
import { Comparison } from '@src/models/Comparisons';
import ComparisonsService from '@src/services/ComparisonsService';


const comparisonRouter = express.Router();

comparisonRouter.get('/:firstId/:secondId', async function (req, res) {
  const firstId = parseInt(req.params.firstId);
  const secondId = parseInt(req.params.secondId);
  const comparison: Comparison = await ComparisonsService.getComparisonByFirstSubjectIdAndSecondSubjectId(firstId, secondId);
  res.send(comparison);
});

comparisonRouter.post('/:firstId/:secondId/:voteId', async function (req, res) {
  const firstId = parseInt(req.params.firstId);
  const secondId = parseInt(req.params.secondId);
  const voteId = parseInt(req.params.voteId);
  const comparison: Comparison = await ComparisonsService.incrementComparisonByFirstSubjectIdAndSecondSubjectId(firstId, secondId, voteId);
  res.send(comparison);
});

export default comparisonRouter;