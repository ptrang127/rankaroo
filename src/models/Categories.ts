// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate keys.';


// **** Types **** //

export interface Category {
  id: number;
  name: string;
}


// **** Functions **** //

/**
 * Create new Category.
 */
function new_(
  name?: string,
  id?: number, // id last cause usually set by db
): Category {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
  };
}

/**
 * Get category instance from object.
 */
function from(param: object): Category {
  if (!isCategory(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as Category;
  return new_(p.name, p.id);
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


// **** Export default **** //

export default {
  new: new_,
  from,
  isCategory,
} as const;
