import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionReducer";

export default configureStore({
  reducer: {
    session: sessionReducer,
  },
});
