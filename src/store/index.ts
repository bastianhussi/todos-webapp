import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import sessionReducer from "./session/reducers";

// import { combineReducers } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({
// 	session: sessionReducer,
// 	system: systemReducer,
// })

const store = createStore(sessionReducer, composeWithDevTools());

export default store;
