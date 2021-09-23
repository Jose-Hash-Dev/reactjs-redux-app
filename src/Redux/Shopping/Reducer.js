import * as actionTypes from "./Types";
import { INITIAL_STATE } from "./Model";

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_DO_CART: {
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: +item.quantity + +action.payload.quantity,
                  }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                quantity: +action.payload.quantity,
              },
            ],
        sum: state.sum + parseFloat(item.price) * action.payload.quantity,
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      const item = state.products.find((prod) => prod.id === action.payload.id);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        sum: state.sum - parseFloat(item.price) * action.payload.quantity,
      };
    }
    case actionTypes.ADJUST_QUANTITY: {
      const item = state.products.find((prod) => prod.id === action.payload.id);
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity,
              }
            : item
        ),
        sum:
          state.sum +
          parseFloat(item.price) *
            (action.payload.quantity - action.payload.previousQuantity),
      };
    }
    case actionTypes.LOAD_CURRENT_ITEM: {
      return {
        ...state,
        currentItem: action.payload,
      };
    }
    case actionTypes.CLEAR_CART: {
      return {
        ...state,
        cart: [],
        sum: 0,
      };
    }
    case actionTypes.SAVE_ORDER: {
      return {
        ...state,
        order: state.cart.map((item) => ({
          ...item,
          quantity: +item.quantity,
          user: action.payload.user,
        })),
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
