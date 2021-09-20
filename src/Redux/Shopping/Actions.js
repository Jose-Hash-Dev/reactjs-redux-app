import * as actionTypes from "./Types";

export const addToCart = (itemID, value) => {
  return {
    type: actionTypes.ADD_DO_CART,
    payload: {
      id: itemID,
      quantity: value,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQuantity = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const saveOrder = (name, email) => {
  return {
    type: actionTypes.SAVE_ORDER,
    payload: {
      user: {
        name: name,
        email: email,
      },
    },
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
