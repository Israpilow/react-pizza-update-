import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetPizzas = (category, sortBy, pagination, search) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${search ? `q=${search}` : ''}${
        category !== null ? `category=${category}` : ''
      }&_page=${pagination.page}&_limit=${pagination.limit}&_sort=${sortBy.type}${
        sortBy.order !== undefined ? `&_order=${sortBy.order}` : '&_order=desc'
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (value) => ({
  type: 'SET_LOADED',
  payload: value,
});
