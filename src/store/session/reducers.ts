import axios from "axios";
import {
  LOGIN_SESSION,
  LOGOUT_SESSION,
  SessionActionTypes,
  SessionState,
  CHANGE_SESSION,
} from "./types";

const initialState: SessionState = {
  profile: undefined,
};

const sessionReducer = (state = initialState, action: SessionActionTypes): SessionState => {
  switch (action.type) {
    case LOGIN_SESSION:
      // Store the session data inside the browsers localStorage.
      window.localStorage.setItem("auth", JSON.stringify(action.payload));
      // Setting the authorization header for all requests made with Axios.
      axios.defaults.headers.common["Authorization"] = action.payload.token;

      return action.payload;
    case LOGOUT_SESSION:
      window.localStorage.removeItem("auth");
      delete axios.defaults.headers.common["Authorization"];

      return {};
    case CHANGE_SESSION:
      // TODO: implement!

      return action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
