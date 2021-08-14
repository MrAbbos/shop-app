import { combineReducers } from "redux";

import shoppingReducer from "./shopping/reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
