import {
  SessionActionTypes,
  LOGIN_SESSION,
  LOGOUT_SESSION,
  LoginUser,
  SessionState,
  SET_SESSION,
} from "./types";

export const loginSession = (userData: LoginUser): SessionActionTypes => {
  return {
    type: LOGIN_SESSION,
    payload: userData,
  };
};

export const setSession = (sessionData: SessionState): SessionActionTypes => {
  return {
    type: SET_SESSION,
    payload: sessionData,
  };
};

export const logoutSession = (): SessionActionTypes => {
  return {
    type: LOGOUT_SESSION,
  };
};
