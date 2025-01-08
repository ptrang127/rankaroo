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

export interface SubjectRecord {
  id: number;
  category_id: number;
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

/**
 * Create new subject Record.
 */
function newRecord_(
  id: number,
  category_id?: number,
  name?: string,
  wins?: number,
  losses?: number,
): SubjectRecord {
  return {
    id: (id ?? undefined),
    category_id: (category_id ?? -1),
    name: (name ?? ''),
    wins: (wins ?? 0),
    losses: (losses ?? 0),
  };
}


/**
 * Create new Subject from Subject Record.
 */
function fromRecord(record: SubjectRecord): Subject {
  return new_(
    record.id,
    record.category_id,
    record.name,
    record.wins,
    record.losses);
}

/**
 * Create new Subject Record from Subject.
 */
function toRecord(subject: Subject): SubjectRecord {
  return newRecord_(
    subject.id,
    subject.categoryId,
    subject.name,
    subject.wins,
    subject.losses);
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isSubject,
  fromRecord,
  toRecord,
} as const;
