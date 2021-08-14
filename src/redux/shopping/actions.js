import { actionTypes } from "./actionTypes";

export const setProducts = (data) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: {
      data,
    },
  };
};

export const addToCart = (itemID, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
      quantity,
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

export const adjustItemQuantity = (itemID, quantity) => {
  return {
    type: actionTypes.ADJUST_ITEM_QUANTITY,
    payload: {
      id: itemID,
      quantity,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
