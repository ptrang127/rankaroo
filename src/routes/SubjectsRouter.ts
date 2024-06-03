import express from 'express';
import pg from '../database/knex';
import { Subject } from '@src/models/Subjects';
import SubjectService from '@src/services/SubjectService';


const subjectRouter = express.Router();

// Define routes
subjectRouter.get('/', async function (req, res) {
  const subjects: Subject[] = await SubjectService.getAllSubjects();


  res.send(subjects);
});

subjectRouter.get('/:id', async function (req, res) {
  const subjectId = parseInt(req.params.id);
  const subject: Subject = await SubjectService.getBySubjectId(subjectId);

  res.send(subject);
});

// Example route: localhost:3000/subjects?categoryId=1
subjectRouter.get('/byCategory/:categoryId', async function (req, res) {
  console.log("by catgegory")
  const categoryId: number = parseInt(req.params.categoryId);

  const subjectsByCategory: Subject[]= await SubjectService.getByCategory(categoryId);

  res.send(subjectsByCategory)
})

export default subjectRouter;
