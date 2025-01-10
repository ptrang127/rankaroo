// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' +
  'with the appropriate keys.';


// **** Types **** //

export interface Category {
  id: number;
  name: string;
}

export interface CategoryRecord {
  id: number;
  name: string;
}

// **** Functions **** //

/**
 * Create new Category.
 */
function new_(
  id?: number, // id last cause usually set by db
  name?: string,
): Category {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
  };
}

/**
 * See if the param meets criteria to be a category.
 */
function isCategory(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' &&
    'name' in arg && typeof arg.name === 'string'
  );
}

/**
 * Create new Subject from Subject Record.
 */
function fromRecord(record: CategoryRecord): Category {
  return new_(
    record.id,
    record.name);
}

// **** Export default **** //

export default {
  new: new_,
  isCategory,
  fromRecord,
} as const;
