import Comparisons, { Comparison } from '@src/models/Comparisons';
import Subjects, { Subject } from '@src/models/Subjects';
import pg from '../database/knex';


async function getComparisonByFirstSubjectIdAndSecondSubjectId(firstSubjectId: number, secondSubjectId: number): Promise<Comparison> {
    const comparisonRecord = await pg('comparisons').where({
        first_subject_id: firstSubjectId,
        second_subject_id: secondSubjectId
    }).first();
    return Comparisons.fromRecord(comparisonRecord);
}

async function getComparisonByCategory(categoryId: number): Promise<Subject[]> {
    // Query to get 2 random records
    const getRandomRecords = async () => {
        const records = await pg('subjects')
        .where('category_id', categoryId)
        .orderByRaw('RANDOM()') // Use RAND() for MySQL instead of RANDOM()
        .limit(2);
    
        return records.map(Subjects.fromRecord);
    };
  
    // Call the function
    const response: Subject[] = await getRandomRecords()
        //.then((records) => console.log(records))
        //.catch((err) => console.error('Error fetching records:', err))
        //.finally(() => pg.destroy()); // Close the connection
    
    console.log(response);
    //return getComparisonByFirstSubjectIdAndSecondSubjectId(response[0].id, response[1].id);
    return response;
}

async function incrementComparisonByFirstSubjectIdAndSecondSubjectId(firstSubjectId: number, secondSubjectId: number, voteId: number): Promise<Comparison> {

    // order the IDs to avoid duplicates
    var firstId = Math.min(firstSubjectId, secondSubjectId);
    var secondId = Math.max(firstSubjectId, secondSubjectId);

    // try to get an existing comparison record
    var comparisonRecord = await pg('comparisons').where({
        first_subject_id: firstId,
        second_subject_id: secondId
    }).first();

    // create a new comparison object or update the existing one
    var comparison: Comparison = (comparisonRecord == null) ?
        Comparisons.new(undefined, firstId, secondId, 0, 0) :
        Comparisons.fromRecord(comparisonRecord);

    // increment the votes based on the voteId
    comparison.firstSubjectVotes = (voteId == firstId) ? comparison.firstSubjectVotes + 1 : comparison.firstSubjectVotes;
    comparison.secondSubjectVotes = (voteId == secondId) ? comparison.secondSubjectVotes + 1 : comparison.secondSubjectVotes;

    // upsert the comparison record
    const updatedRecord = await pg('comparisons')
        .insert(Comparisons.toRecord(comparison))
        .onConflict(['first_subject_id', 'second_subject_id'])
        .merge()
        .returning('*');
    return Comparisons.fromRecord(updatedRecord[0]);
}


// **** Export default **** //

export default {
    getComparisonByFirstSubjectIdAndSecondSubjectId,
    getComparisonByCategory,
    incrementComparisonByFirstSubjectIdAndSecondSubjectId,
} as const;
