export const setCategory = (index) => ({
  type: 'SET_CATEGORY',
  payload: index,
});

export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setPagination = (index) => ({
  type: 'SET_PAGINATION',
  payload: index,
});

export const setSearch = (value) => ({
  type: 'SET_SEARCH',
  payload: value,
});

export const setClearValue = (value) => ({
  type: 'SET_CLEAR_VALUE',
  payload: value,
});
