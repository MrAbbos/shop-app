import { actionTypes } from "./actionTypes";
const INITIAL_STATE = {
  products: [
    { id: "1", title: "salom", img: "img" },
    { id: "2", title: "salom", img: "img" },
    { id: "3", title: "salom", img: "img" },
    { id: "4", title: "salom", img: "img" },
    { id: "5", title: "salom", img: "img" },
    { id: "6", title: "salom", img: "img" },
    { id: "7", title: "salom", img: "img" },
    { id: "8", title: "salom", img: "img" },
    { id: "9", title: "salom", img: "img" },
    { id: "10", title: "salom", img: "img" },
    { id: "11", title: "salom", img: "img" },
  ],
  cart: [],
  currenItem: null,
};

function shopReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload.data,
      };
    case actionTypes.ADD_TO_CART:
      const id = payload.id;
      // Get Item data from products array
      const item = state.products.find((product) => product.id === id);
      // check if item is already in cart
      const inCart = state.cart.find((item) => (item.id === id ? true : false));
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + (payload.quantity || 1) }
                : item
            )
          : [...state.cart, { ...item, quantity: +payload.quantity || 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case actionTypes.ADJUST_ITEM_QUANTITY:
      // maybe you will face with bug maybe not
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: +payload.quantity }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return { ...state, currenItem: payload };
    default:
      return state;
  }
}

export default shopReducer;
