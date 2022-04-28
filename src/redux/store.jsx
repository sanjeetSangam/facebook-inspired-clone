import { combineReducers, createStore } from "redux";

import { fbReducer } from "./reducer";

const rootReducer = combineReducers({
  user: fbReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
