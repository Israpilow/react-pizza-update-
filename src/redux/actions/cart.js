export const setAddCart = (obj) => ({
  type: 'SET_ADD_CART',
  payload: obj,
});

export const setRemoveCart = (id) => ({
  type: 'SET_REMOVE_CART',
  payload: id,
});

export const setPlusItem = (id) => ({
  type: 'SET_PLUS_ITEM',
  payload: id,
});

export const setMinusItem = (id) => ({
  type: 'SET_MINUS_ITEM',
  payload: id,
});

export const setDeleteCart = (id) => ({
  type: 'SET_DELETE_CART',
  payload: id,
});
