import Categories, { Category } from './Categories';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate keys.';


// **** Types **** //

export interface Comparison {
  id: number;
  category: Category;
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
  category?: Category,
  firstSubjectId?: number,
  secondSubjectId?: number,
  firstSubjectId?: number,
  secondSubjectVotes?: number,
  id?: number, // id last cause usually set by db
): Comparison {
  return {
    id: (id ?? -1),
    category: (category ?? Categories.new()),
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
  return new_(p.category, p.firstSubjectId, p.secondSubjectId,
    p.firstSubjectVotes, p.secondSubjectVotes, p.id);
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
    'secondSubjectVotes' in arg && typeof arg.id === 'number' &&
    'category' in arg && typeof arg.category === 'object'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isComparison,
} as const;
