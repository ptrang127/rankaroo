import Comparisons, { Comparison } from '@src/models/Comparisons';
import pg from '../database/knex';


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

    console.log("firstSubjectId: " + firstSubjectId);
    console.log("secondSubjectId: " + secondSubjectId);
    var firstId = Math.min(firstSubjectId, secondSubjectId);
    var secondId = Math.max(firstSubjectId, secondSubjectId);
    var comparisonRecord = await pg('comparisons').where({
        first_subject_id: firstId,
        second_subject_id: secondId
    }).first();

    console.log("comparisonRecord");
    console.log(comparisonRecord);


    var comparison: Comparison = (comparisonRecord == null) ?
        Comparisons.new(undefined, categoryId, firstId, secondId, 0, 0) :
        Comparisons.fromRecord(comparisonRecord);

    console.log("comparison");
    console.log(comparison);

    comparison.firstSubjectVotes = (voteId == firstId) ? comparison.firstSubjectVotes + 1 : comparison.firstSubjectVotes;
    comparison.secondSubjectVotes = (voteId == secondId) ? comparison.secondSubjectVotes + 1 : comparison.secondSubjectVotes;
    const updatedRecord = await pg('comparisons')
        .insert(Comparisons.toRecord(comparison))
        .onConflict(['first_subject_id', 'second_subject_id'])
        .merge()
        .returning('*');
    return Comparisons.fromRecord(updatedRecord[0]);
}


// **** Export default **** //

export default {
    getComparisonById,
    getComparisonByFirstSubjectIdAndSecondSubjectId,
    incrementComparisonByFirstSubjectIdAndSecondSubjectId,
} as const;
