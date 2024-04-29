import Comparisons, { Comparison } from '@src/models/Comparisons';
import pg from '../database/knex';


async function getAllComparisons(): Promise<Comparison[]> {
    const comparisonRecords = await pg('comparisons').select('*');
    return comparisonRecords.map(Comparisons.fromRecord);
}

async function getComparisonById(id: number): Promise<Comparison> {
    const categoryRecord = await pg('comparisons').where({ id: id }).first();
    return Comparisons.fromRecord(categoryRecord);
}

async function getComparisonByFirstSubjectIdAndSecondSubjectId(firstSubjectId: number, secondSubjectId: number): Promise<Comparison> {
    const comparisonRecord = await pg('comparisons').where({
        first_subject_id: firstSubjectId,
        second_subject_id: secondSubjectId
    }).first();
    return Comparisons.fromRecord(comparisonRecord);
}

async function incrementComparisonByFirstSubjectIdAndSecondSubjectId(categoryId: number, firstSubjectId: number, secondSubjectId: number, voteId: number): Promise<Comparison> {

    // order the IDs to avoid duplicates
    var firstId = Math.min(firstSubjectId, secondSubjectId);
    var secondId = Math.max(firstSubjectId, secondSubjectId);

    // try to get an existing comparison record
    var foundComparison = await getComparisonByFirstSubjectIdAndSecondSubjectId(firstId, secondId);

    // create a new comparison object or update the existing one
    var comparison: Comparison = (foundComparison == null) ?
        Comparisons.new(undefined, categoryId, firstId, secondId, 0, 0) :
        foundComparison;

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
    getAllComparisons,
    getComparisonById,
    getComparisonByFirstSubjectIdAndSecondSubjectId,
    incrementComparisonByFirstSubjectIdAndSecondSubjectId,
} as const;
