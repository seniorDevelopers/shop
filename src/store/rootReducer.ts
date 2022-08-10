import { combineReducers } from "redux";
import { changeLanguge } from "./changeLanguage/reducer";
import { getUsers } from "./users/reducer";
const rootReducer = combineReducers({
  changeLanguge,
  getUsers,
});

export default rootReducer;
