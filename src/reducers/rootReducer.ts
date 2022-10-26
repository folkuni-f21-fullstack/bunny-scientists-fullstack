import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import {fetchMenu} from "./menuReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: fetchMenu
});

export { rootReducer };
