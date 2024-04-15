export const MODES = {
  none: 'none',
  get: 'get',
  post: 'post',
  delete: 'delete',
  update: 'update',
  error: 'error',
} as const;

export const TEXTS = {
  none: '',
  get: 'Loading in progress',
  post: 'Save in progress',
  delete: 'Delete in progress',
  update: 'Update in progress',
  error: 'An error occured while loading',
} as const;

export const DEFAULT_CLASSNAME = 'af-loader';
