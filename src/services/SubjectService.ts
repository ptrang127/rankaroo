import Subjects, { Subject } from '@src/models/Subjects';
import pg from '../database/knex';

async function getAllSubjects(): Promise<Subject[]> {
  const subjectRecords = await pg('subjects').select('*');

  const subjects = subjectRecords.map(Subjects.from);

  return subjects;
}

async function getBySubjectId(subjectId: number): Promise<Subject> {
  const subject: Subject = await pg('subjects').where({id: subjectId}).first('*');

  return subject;
}

async function getByCategory(categoryId: number): Promise<Subject[]> {
  const subjectRecords = await pg('subjects').where({category_id: categoryId}).select('*');

  const subjects: Subject[] = subjectRecords.map(Subjects.from)

  return subjects
}

export default {
  getAllSubjects,
  getBySubjectId,
  getByCategory
} as const;
