import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer
});

export { rootReducer };

