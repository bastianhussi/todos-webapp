import { LOGIN_SESSION, LOGOUT_SESSION, SessionActionTypes, SessionState } from "./types";

const initialState: SessionState = {
  user: {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "1234",
  },
};

const sessionReducer = (state = initialState, action: SessionActionTypes) => {
  switch (action.type) {
    case LOGIN_SESSION:
      // TODO: make api call
      return {};
    case LOGOUT_SESSION:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
