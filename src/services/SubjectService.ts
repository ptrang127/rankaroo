import Subjects, { Subject } from '@src/models/Subjects';
import pg from '../database/knex';

async function getAllSubjects(): Promise<Subject[]> {
  const subjectRecords = await pg('subjects').select('*');

  const subjects = subjectRecords.map(Subjects.fromRecord);

  return subjects;
}

async function getBySubjectId(subjectId: number): Promise<Subject> {
  const subject: Subject = await pg('subjects').where({id: subjectId}).first('*');

  return subject;
}

async function getByCategory(categoryId: number): Promise<Subject[]> {
  const subjectRecords = await pg('subjects').where({category_id: categoryId}).select('*');

  const subjects: Subject[] = subjectRecords.map(Subjects.fromRecord)

  return subjects
}

async function getRandomSubjectsByCategory(categoryId: number): Promise<Subject[]> {

  // Query to get 2 random subject records
  const getRandomRecords = async () => {
      const records = await pg('subjects')
      .where('category_id', categoryId)
      .orderByRaw('RANDOM()')
      .limit(2);
      return records.map(Subjects.fromRecord);
  };

  // Call the function
  const response: Subject[] = await getRandomRecords();
  return response;
}

export default {
  getAllSubjects,
  getBySubjectId,
  getByCategory,
  getRandomSubjectsByCategory
} as const;
