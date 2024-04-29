import Categories, { Category } from './Categories';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate keys.';


// **** Types **** //

export interface Subject {
  id: number;
  categoryId: number;
  name: string;
}


// **** Functions **** //

/**
 * Create new Subject.
 */
function new_(
  name?: string,
  categoryId?: number,
  id?: number, // id last cause usually set by db
): Subject {
  return {
    id: (id ?? -1),
    categoryId: (categoryId ?? -1),
    name: (name ?? ''),
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
  return new_(p.name, p.categoryId, p.id);
}

/**
 * See if the param meets criteria to be a subject.
 */
function isSubject(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'name' in arg && typeof arg.name === 'string' &&
    'categoryId' in arg && typeof arg.categoryId === 'number'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isSubject,
} as const;
