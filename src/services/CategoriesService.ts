import Categories, { Category } from '@src/models/Categories';
import pg from '../database/knex';

async function getAllCategories(): Promise<Category[]> {
    const categoryRecords = await pg('categories').select('*');
    const categories: Category[] = categoryRecords.map(Categories.fromRecord);
    return categories;
}

async function getCategoryById(id: number): Promise<Category> {
    const categoryRecord = await pg('categories').where({ id }).first();
    return Categories.fromRecord(categoryRecord)
}

async function getRandomCategory(): Promise<Category> {
    const getRandomRecords = async () => {
        const categoryRecord = await pg('categories')
            .select('*')
            .orderByRaw('RANDOM()')
            .limit(1)
            .first();
        return Categories.fromRecord(categoryRecord);
    };

    // Call the function
    const response: Category = await getRandomRecords();
    return response;
}

// **** Export default **** //

export default {
    getAllCategories,
    getCategoryById,
    getRandomCategory
} as const;
