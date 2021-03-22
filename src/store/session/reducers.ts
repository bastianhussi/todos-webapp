import axios from "axios";
import {
  LOGIN_SESSION,
  LOGOUT_SESSION,
  SessionActionTypes,
  SessionState,
  SET_SESSION,
} from "./types";

// const initialState: SessionState = {
//   user: {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@gmail.com",
//     password: "1234",
//   },
// };

const initialState: SessionState = {
  profile: undefined,
};

const sessionReducer = (state = initialState, action: SessionActionTypes) => {
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
    case SET_SESSION:
      // TODO: implement!

      return action.payload;
    default:
      return state;
  }
};

export default sessionReducer;
