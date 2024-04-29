import express from 'express';
import pg from '../database/knex';
import { Subject } from '@src/models/Subjects';


const subjectRouter = express.Router();

// Define routes
subjectRouter.get('/', async function (req, res) {
  const subjects: Subject[] = await pg('subjects').select('*');
  res.send(subjects);
});

subjectRouter.get('/:id', async function (req, res) {
  const subjectId = req.params.id;
  const subject: Subject = await pg('subjects').where({id: subjectId}).first('*');
  res.send(subject);
});

export default subjectRouter;
