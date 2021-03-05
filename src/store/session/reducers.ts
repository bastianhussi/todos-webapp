import { LOGIN_SESSION, LOGOUT_SESSION, User, SessionActionTypes, SessionState } from "./types";

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
      window.localStorage.setItem("auth", JSON.stringify(session));

      return session;
    case LOGOUT_SESSION:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
