import { createStore, combineReducers } from "redux";
import { rootReducer } from "./rootReducer";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todoReducer";

export const storeConfig = () => {
  const myStore = createStore(
    combineReducers({ rootReducer, countReducer, todoReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
