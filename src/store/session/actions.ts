import {
  SessionActionTypes,
  LOGIN_SESSION,
  LOGOUT_SESSION,
  LoginState,
  SET_SESSION,
  SessionState,
} from "./types";

export const loginSession = (loginData: LoginState): SessionActionTypes => {
  return {
    type: LOGIN_SESSION,
    payload: loginData,
  };
};

export const logoutSession = (): SessionActionTypes => {
  return {
    type: LOGOUT_SESSION,
  };
};

export const setSession = (sessionData: SessionState): SessionActionTypes => {
  return {
    type: SET_SESSION,
    payload: sessionData,
  };
};
