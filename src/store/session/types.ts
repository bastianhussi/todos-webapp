export type Profile = {
  id: number;
  email: string;
  name: string;
};

export type SessionState = {
  profile?: Profile;
  token?: string;
};

export type LoginState = {
  profile: Profile;
  token: string;
};

export const LOGIN_SESSION = "LOGIN_SESSION";
export const LOGOUT_SESSION = "LOGOUT_SESSION";
export const SET_SESSION = "SET_SESSION";

interface LoginSessionAction {
  type: typeof LOGIN_SESSION;
  payload: LoginState;
}

interface LogoutSessionAction {
  type: typeof LOGOUT_SESSION;
}

interface SetSessionAction {
  type: typeof SET_SESSION;
  payload: SessionState;
}

export type SessionActionTypes = LoginSessionAction | LogoutSessionAction | SetSessionAction;
