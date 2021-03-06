import axios from "axios";
import {
  LOGIN_SESSION,
  LOGOUT_SESSION,
  User,
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
  user: undefined,
};

const sessionReducer = (state = initialState, action: SessionActionTypes) => {
  switch (action.type) {
    case LOGIN_SESSION:
      // TODO: make api call
      const dummyToken = "123456789";
      const dummyUser: User = {
        id: 0,
        email: action.payload.email,
        password: action.payload.password,
        name: "John Doe",
      };

      const session = { user: dummyUser, token: dummyToken };

      // Store the session data inside the browsers localStorage.
      window.localStorage.setItem("auth", JSON.stringify(session));
      // Setting the authorization header for all requests made with Axios.
      axios.defaults.headers.common["Authorization"] = dummyToken;

      return session;
    case SET_SESSION:
      return action.payload;
    case LOGOUT_SESSION:
      window.localStorage.removeItem("auth");
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
