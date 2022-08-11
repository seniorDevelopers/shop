import { combineReducers } from "redux";
import { changeLanguge } from "./changeLanguage/reducer";
import { getUsers } from "./users/reducer";
import { getProducts } from "./products/reducer";
const rootReducer = combineReducers({
  changeLanguge,
  getUsers,
  getProducts,
});

export default rootReducer;
