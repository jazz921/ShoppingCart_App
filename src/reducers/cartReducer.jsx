export const INITIAL_STATE = {
  skip: 0,
  total: 0,
  products: [],
  cart: [],
};

export const ACTIONS = {
  PREV_PRODUCT: "prev-product",
  NEXT_PRODUCT: "next-product",
  FETCH_PRODUCTS: "fetch-prduct",
  INPUT_TO_CART: "input-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  ADD_TOTAL: 'add-total'
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ACTIONS.NEXT_PRODUCT:
      return {
        ...state,
        skip: state.skip + 12,
      };
    case ACTIONS.PREV_PRODUCT:
      return {
        ...state,
        skip: state.skip - 12,
      };
    case ACTIONS.INPUT_TO_CART:
      return {
        ...state,
        cart: [{...action.payload}, ...state.cart],
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(e => e.id !== action.payload.id)
      }
    case ACTIONS.ADD_TOTAL: 
      return {
        ...state,
        total: state.total + action.payload
      }
    case ACTIONS.MINUS_TOTAL:
      return {
        ...state,
        total: state.total - action.payload
      }
    default:
      return state;
  }
};
