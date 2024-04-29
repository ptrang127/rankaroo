import Categories, { Category } from './Categories';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate keys.';


// **** Types **** //

export interface Comparison {
  id?: number;
  categoryId: number;
  firstSubjectId: number;
  secondSubjectId: number;
  firstSubjectVotes: number;
  secondSubjectVotes: number;
}

export interface ComparisonRecord {
  id?: number;
  category_id: number;
  first_subject_id: number;
  second_subject_id: number;
  first_subject_votes: number;
  second_subject_votes: number;
}


// **** Functions **** //

/**
 * Create new Comparison.
 */
function new_(
  id?: number,
  categoryId?: number,
  firstSubjectId?: number,
  secondSubjectId?: number,
  firstSubjectVotes?: number,
  secondSubjectVotes?: number,
): Comparison {
  return {
    id: (id ?? undefined),
    categoryId: (categoryId ?? -1),
    firstSubjectId: (firstSubjectId ?? -1),
    secondSubjectId: (secondSubjectId ?? -1),
    firstSubjectVotes: (firstSubjectVotes ?? -1),
    secondSubjectVotes: (secondSubjectVotes ?? -1),
  };
}

/**
 * Create new Comparison Record.
 */
function newRecord_(
  id?: number,
  category_id?: number,
  first_subject_id?: number,
  second_subject_id?: number,
  first_subject_votes?: number,
  second_subject_votes?: number,
): ComparisonRecord {
  return {
    id: (id ?? undefined),
    category_id: (category_id ?? -1),
    first_subject_id: (second_subject_id ?? -1),
    second_subject_id: (first_subject_id ?? -1),
    first_subject_votes: (first_subject_votes ?? 0),
    second_subject_votes: (second_subject_votes ?? 0),
  };
}

function fromRecord(record: ComparisonRecord): Comparison {
  return new_(
    record.id,
    record.category_id,
    record.first_subject_id,
    record.second_subject_id,
    record.first_subject_votes,
    record.second_subject_votes);
}

function toRecord(comparison: Comparison): ComparisonRecord {
  return newRecord_(
    comparison.id,
    comparison.categoryId,
    comparison.firstSubjectId,
    comparison.secondSubjectId,
    comparison.firstSubjectVotes,
    comparison.secondSubjectVotes);
}

/**
 * See if the param meets criteria to be a comparison.
 */
function isComparison(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' &&
    'categoryId' in arg && typeof arg.categoryId === 'number' &&
    'firstSubjectId' in arg && typeof arg.id === 'number' &&
    'secondSubjectId' in arg && typeof arg.id === 'number' &&
    'firstSubjectVotes' in arg && typeof arg.id === 'number' &&
    'secondSubjectVotes' in arg && typeof arg.id === 'number'
  );
}


// **** Export default **** //

export default {
  new: new_,
  newRecord: newRecord_,
  fromRecord,
  toRecord,
  isComparison,
} as const;
