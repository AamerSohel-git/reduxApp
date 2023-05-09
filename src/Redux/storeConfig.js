import { createStore, combineReducers } from "redux";
import { rootReducer } from "./rootReducer";
import { countReducer } from "./countReducer";

export const storeConfig = () => {
  const myStore = createStore(
    combineReducers({ rootReducer, countReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
