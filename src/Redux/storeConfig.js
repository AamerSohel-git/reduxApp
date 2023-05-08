import { createStore, combineReducers } from "redux";
import { rootReducer } from "./rootReducer";

export const storeConfig = () => {
  const myStore = createStore(
    combineReducers({ rootReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
