import Categories, { Category } from '@src/models/Categories';
import pg from '../database/knex';

async function getAllCategories(): Promise<Category[]> {
    const categoryRecords = await pg('categories').select('*');
    const categories: Category[] = categoryRecords.map(Categories.from);
    return categories;
}

async function getCategoryById(id: number): Promise<Category> {
    const categoryRecord = await pg('categories').where({ id }).first();
    return Categories.from(categoryRecord)
}

// **** Export default **** //

export default {
    getAllCategories,
    getCategoryById,
} as const;
