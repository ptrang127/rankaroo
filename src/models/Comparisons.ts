// **** Types **** //

export interface Comparison {
  id?: number;
  firstSubjectId: number;
  secondSubjectId: number;
  firstSubjectVotes: number;
  secondSubjectVotes: number;
}

export interface ComparisonRecord {
  id?: number;
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
  firstSubjectId?: number,
  secondSubjectId?: number,
  firstSubjectVotes?: number,
  secondSubjectVotes?: number,
): Comparison {
  return {
    id: (id ?? undefined),
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
  first_subject_id?: number,
  second_subject_id?: number,
  first_subject_votes?: number,
  second_subject_votes?: number,
): ComparisonRecord {
  return {
    id: (id ?? undefined),
    first_subject_id: (first_subject_id ?? -1),
    second_subject_id: (second_subject_id ?? -1),
    first_subject_votes: (first_subject_votes ?? 0),
    second_subject_votes: (second_subject_votes ?? 0),
  };
}

/**
 * Create new Comparison from Comparison Record.
 */
function fromRecord(record: ComparisonRecord): Comparison {
  return new_(
    record.id,
    record.first_subject_id,
    record.second_subject_id,
    record.first_subject_votes,
    record.second_subject_votes);
}

/**
 * Create new Comparison Record from Comparison.
 */
function toRecord(comparison: Comparison): ComparisonRecord {
  return newRecord_(
    comparison.id,
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
