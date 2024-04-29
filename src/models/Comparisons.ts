import Categories, { Category } from './Categories';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate keys.';


// **** Types **** //

export interface Comparison {
  id: number;
  categoryId: number;
  firstSubjectId: number;
  secondSubjectId: number;
  firstSubjectVotes: number;
  secondSubjectVotes: number;
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
    id: (id ?? -1),
    categoryId: (categoryId ?? -1),
    firstSubjectId: (firstSubjectId ?? -1),
    secondSubjectId: (secondSubjectId ?? -1),
    firstSubjectVotes: (firstSubjectVotes ?? -1),
    secondSubjectVotes: (secondSubjectVotes ?? -1),
  };
}

/**
 * Get comparison instance from object.
 */
function from(param: object): Comparison {
  if (!isComparison(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Comparison;
  return new_(p.id, p.categoryId, p.firstSubjectId, p.secondSubjectId,
    p.firstSubjectVotes, p.secondSubjectVotes);
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
  from,
  isComparison,
} as const;
