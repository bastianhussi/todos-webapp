import { createStore } from "@reduxjs/toolkit";
import sessionReducer from "./session/reducers";

// import { combineReducers } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({
// 	session: sessionReducer,
// 	system: systemReducer,
// })

const store = createStore(sessionReducer);

export default store;
