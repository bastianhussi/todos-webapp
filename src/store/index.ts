import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./session/reducers";
import todosReducer from "./todos/reducers";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  session: sessionReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
