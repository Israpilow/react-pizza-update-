const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => {
  return arr.reduce((sum, obj) => obj.price + sum, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADD_CART':
      const currentCartItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const cartItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentCartItems,
          totalPrice: getTotalPrice(currentCartItems),
          totalCount: currentCartItems.length,
        },
      };

      const items = Object.values(cartItems).map((obj) => obj.items);
      const currentPrice = [].concat.apply([], items);

      return {
        ...state,
        items: cartItems,
        totalPrice: getTotalPrice(currentPrice),
        totalCount: currentPrice.length,
      };
    case 'SET_REMOVE_CART': {
      const newItems = { ...state.items };
      const currentPrice = newItems[action.payload].totalPrice;
      const currentCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentPrice,
        totalCount: state.totalCount - currentCount,
      };
    }
    case 'SET_PLUS_ITEM': {
      const currentItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const currentPrice = getTotalPrice(currentItems);
      const cartItems = {
        ...state.items,
        [action.payload]: {
          items: currentItems,
          totalPrice: currentPrice,
          totalCount: currentItems.length,
        },
      };
      const items = Object.values(cartItems).map((obj) => obj.items);
      const current = [].concat.apply([], items);
      return {
        ...state,
        items: cartItems,
        totalPrice: state.totalPrice + cartItems[action.payload].items[0].price,
        totalCount: current.length,
      };
    }
    case 'SET_MINUS_ITEM': {
      const currentItems = [...state.items[action.payload].items.slice(1)];

      const currentPrice = getTotalPrice(currentItems);

      const cartItems = {
        ...state.items,
        [action.payload]: {
          items: currentItems,
          totalPrice: currentPrice,
          totalCount: currentItems.length,
        },
      };

      const items = Object.values(cartItems).map((obj) => obj.items);
      const current = [].concat.apply([], items);
      return {
        ...state,
        items: cartItems,
        totalPrice: state.totalPrice - cartItems[action.payload].items[0].price,
        totalCount: current.length,
      };
    }
    case 'SET_DELETE_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default cart;
