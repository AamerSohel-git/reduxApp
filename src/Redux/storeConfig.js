import { createStore, combineReducers } from "redux";
import { rootReducer } from "./rootReducer";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todoReducer";
import { tokenReducer } from "./tokenReducer";

export const storeConfig = () => {
  const myStore = createStore(
    combineReducers({ rootReducer, countReducer, todoReducer, tokenReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
