import Categories, { Category } from './Categories';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate keys.';


// **** Types **** //

export interface Subject {
  id: number;
  categoryId: number;
  name: string;
  wins: number;
  losses: number
}


// **** Functions **** //

/**
 * Create new Subject.
 */
function new_(
  id?: number,
  categoryId?: number,
  name?: string,
  wins?: number,
  losses?: number,
): Subject {
  return {
    id: (id ?? -1),
    categoryId: (categoryId ?? -1),
    name: (name ?? ''),
    wins: (wins ?? 0),
    losses: (losses ?? 0),
  };
}

/**
 * Get subject instance from object.
 */
function from(param: object): Subject {
  if (!isSubject(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Subject;
  return new_(p.id, p.categoryId, p.name, p.wins, p.losses);
}

/**
 * See if the param meets criteria to be a subject.
 */
function isSubject(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'category_id' in arg && typeof arg.category_id === 'number' &&
    'name' in arg && typeof arg.name === 'string' &&
    'wins' in arg && typeof arg.wins === 'number' &&
    'losses' in arg && typeof arg.losses === 'number'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isSubject,
} as const;
