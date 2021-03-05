export interface LoginUser {
  email: string;
  password: string;
}

export interface User extends LoginUser {
  id: number;
  name: string;
}

export interface SessionState {
  user?: User;
  token?: string;
}

export const LOGIN_SESSION = "LOGIN_SESSION";
export const LOGOUT_SESSION = "LOGOUT_SESSION";

interface LoginSessionAction {
  type: typeof LOGIN_SESSION;
  payload: LoginUser;
}

interface LogoutSessionAction {
  type: typeof LOGOUT_SESSION;
}

export type SessionActionTypes = LoginSessionAction | LogoutSessionAction;
