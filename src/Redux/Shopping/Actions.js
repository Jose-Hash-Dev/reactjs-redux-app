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

export const removeFromCart = (itemID, value) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
      quantity: value,
    },
  };
};

export const adjustQuantity = (itemID, value, prevValue) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
      previousQuantity: prevValue,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const saveOrder = () => {
  return {
    type: actionTypes.SAVE_ORDER,
  };
};
export const saveOrderDetails = (
  name,
  email,
  address,
  country,
  delivery,
  deliveryCost,
  totalCost
) => {
  return {
    type: actionTypes.SAVE_ORDER_DETAILS,
    name: name,
    email: email,
    address: address,
    country: country,
    delivery: delivery,
    deliveryCost: deliveryCost,
    totalCost: totalCost,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
