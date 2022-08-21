const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const filteredItems = state.cart.filter((items) => {
      return items.id !== action.payload; // that was pased in the function
    });
    return { ...state, cart: filteredItems };
  }

  return state;
};

export default reducer;
