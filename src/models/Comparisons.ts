import Categories, { Category } from './Categories';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate keys.';


// **** Types **** //

export interface Comparison {
  id: number;
  category: Category;
  subject_1_id: number;
  subject_2_id: number;
  votes_1: number;
  votes_2: number;
}


// **** Functions **** //

/**
 * Create new Comparison.
 */
function new_(
  category?: Category,
  subject_1_id?: number,
  subject_2_id?: number,
  votes_1?: number,
  votes_2?: number,
  id?: number, // id last cause usually set by db
): Comparison {
  return {
    id: (id ?? -1),
    category: (category ?? Categories.new()),
    subject_1_id: (subject_1_id ?? -1),
    subject_2_id: (subject_2_id ?? -1),
    votes_1: (votes_1 ?? -1),
    votes_2: (votes_2 ?? -1),
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
  return new_(p.category, p.subject_1_id, p.subject_2_id,
    p.votes_1, p.votes_2, p.id);
}

/**
 * See if the param meets criteria to be a comparison.
 */
function isComparison(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' &&
    'subject_1_id' in arg && typeof arg.id === 'number' &&
    'subject_2_id' in arg && typeof arg.id === 'number' &&
    'votes_1' in arg && typeof arg.id === 'number' &&
    'votes_2' in arg && typeof arg.id === 'number' &&
    'category' in arg && typeof arg.category === 'object'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isComparison,
} as const;
