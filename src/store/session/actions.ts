import { SessionActionTypes, User, LOGIN_SESSION, LOGOUT_SESSION } from "./types";

export const loginSession = (user: User): SessionActionTypes => {
  return {
    type: LOGIN_SESSION,
    payload: user,
  };
};

export const logoutSession = (): SessionActionTypes => {
  return {
    type: LOGOUT_SESSION,
  };
};
