import { ASCENDING, type Torder } from 'shared/components/Table';

export const TITLE_BAR = 'Nodes';
export const TITLE = 'Available nodes';
export const ROUTE_URL_NODES = '/nodes';
export const TABLE_ITEMS_TYPE = 'nodes';

export const SERVICE_NAME = 'nodes';

export const TABLE_HEADERS_NODES = [
  { id: 'id', key: 'id', label: 'Id', field: 'id'},
  { id: 'name', key: 'name', label: 'Name', field: 'name' },
  { id: 'type', key: 'type', label: 'Type', field: 'type' },
  { id: 'address', key: 'address', label: 'Address', field: 'address' },
  { id: 'actions', key: 'actions', label: 'Actions', field: 'id' },
];

export const DEFAULT_STATE_VALUE = {
  pagination: {
    total: 0,
    currentPage: 1,
    numberPages: 1,
  },
  data: [],
};

export const INITIAL_STATE_SORTING = {
  field: 'name',
  order: ASCENDING as Torder,
};

export const INITIAL_STATE_PAGING = {
  numberItems: 50,
  page: 1,
};
