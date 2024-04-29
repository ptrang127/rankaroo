import Comparisons, { Comparison } from '@src/models/Comparisons';
import pg from '../database/knex';


async function getComparisonById(id: number): Promise<Comparison> {
    const categoryRecord = await pg('comparisons').where({ id: id }).first();
    return Comparisons.from(categoryRecord);
}

async function getComparisonByFirstSubjectIdAndSecondSubjectId(firstSubjectId: number, secondSubjectId: number): Promise<Comparison> {
    const comparisonRecord = await pg('comparisons').where({
        first_subject_id: firstSubjectId,
        second_subject_id: secondSubjectId
    }).first();
    return Comparisons.from(comparisonRecord);
}

async function incrementComparisonByFirstSubjectIdAndSecondSubjectId(categoryId: number, firstSubjectId: number, secondSubjectId: number, voteId: number): Promise<Comparison> {

    var comparisonRecord = await pg('comparisons').where({
        first_subject_id: firstSubjectId,
        second_subject_id: secondSubjectId
    }).first();

    var comparison: Comparison = (comparisonRecord == null) ?
        Comparisons.new(categoryId, firstSubjectId, secondSubjectId, 0, 0, undefined) :
        Comparisons.from({
            id: comparisonRecord.id,
            categoryId: comparisonRecord.category_id,
            firstSubjectId: comparisonRecord.first_subject_id,
            secondSubjectId: comparisonRecord.second_subject_id,
            firstSubjectVotes: comparisonRecord.first_subject_votes,
            secondSubjectVotes: comparisonRecord.second_subject_votes
        });

    comparison.firstSubjectVotes = (voteId == firstSubjectId) ? comparison.firstSubjectVotes + 1 : comparison.firstSubjectVotes;
    comparison.secondSubjectVotes = (voteId == secondSubjectId) ? comparison.secondSubjectVotes + 1 : comparison.secondSubjectVotes;
    const updatedRecord = await pg('comparisons')
        .insert({
            category_id: comparison.categoryId,
            first_subject_id: comparison.firstSubjectId,
            second_subject_id: comparison.secondSubjectId,
            first_subject_votes: comparison.firstSubjectVotes,
            second_subject_votes: comparison.secondSubjectVotes
        })
        .onConflict(['first_subject_id', 'second_subject_id'])
        .merge()
        .returning('*');
    console.log(updatedRecord);
    return Comparisons.from({
        id: updatedRecord[0].id,
        categoryId: updatedRecord[0].category_id,
        firstSubjectId: updatedRecord[0].first_subject_id,
        secondSubjectId: updatedRecord[0].second_subject_id,
        firstSubjectVotes: updatedRecord[0].first_subject_votes,
        secondSubjectVotes: updatedRecord[0].second_subject_votes
    });
}


// **** Export default **** //

export default {
    getComparisonById,
    getComparisonByFirstSubjectIdAndSecondSubjectId,
    incrementComparisonByFirstSubjectIdAndSecondSubjectId,
} as const;
