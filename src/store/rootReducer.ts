import { combineReducers } from "redux";
import { changeLanguge } from "./changeLanguage/reducer";
const rootReducer = combineReducers({
  changeLanguge,
});

export default rootReducer;
