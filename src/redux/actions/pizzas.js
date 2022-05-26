import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetPizzas = (category, sortBy, pagination, search) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://62877047e9494df61b38ebfa.mockapi.io/pizzas?${search ? `search=${search}` : ''}${
        category !== null ? `category=${category}` : ''
      }&page=${pagination.page}&limit=${pagination.limit}&sortBy=${sortBy.type}${
        sortBy.order !== undefined ? `&order=${sortBy.order}` : '&order=desc'
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
