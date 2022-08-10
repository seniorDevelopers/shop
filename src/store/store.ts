import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const getMiddleware = () => applyMiddleware(thunk);

export const store = createStore(
  rootReducer,
  composeWithDevTools(getMiddleware())
);
export type AppDispatch = typeof store.dispatch