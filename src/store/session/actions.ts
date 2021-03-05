import { SessionActionTypes, LOGIN_SESSION, LOGOUT_SESSION, LoginUser } from "./types";

export const loginSession = (userData: LoginUser): SessionActionTypes => {
  return {
    type: LOGIN_SESSION,
    payload: userData,
  };
};

export const logoutSession = (): SessionActionTypes => {
  return {
    type: LOGOUT_SESSION,
  };
};
