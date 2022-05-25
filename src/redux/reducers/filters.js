const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
  },
  pagination: {
    page: 1,
    limit: 8,
  },
  search: '',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    case 'SET_PAGINATION':
      return {
        ...state,
        pagination: action.payload,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_CLEAR_VALUE':
      return {
        ...state,
        search: '',
      };
    default:
      return state;
  }
};

export default filters;
