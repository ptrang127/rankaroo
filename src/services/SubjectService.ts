import { Subject } from '@src/models/Subjects';
import pg from '../database/knex.ts';

async function getSubjectsByCategory(categoryId: number): Promise<Subject[]> {
  // 1. Use knex (pg) to query the Subjects table. Take a look at getAllCategories in the CategoriesService.ts file. 

  // 2. Convert the record received from the Subjects table to the Subject model

  // 3. Return the list of subjects
}
