import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_SESSION, SessionState } from "./store/session/types";

// https://dev.to/ksushiva/authentication-with-react-js-9e4

/**
 * @return {JSX.Element} Login Element
 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<SessionState>("/api/login", {
        email,
        password,
      });
      dispatch({ type: LOGIN_SESSION, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <a href="/register">No account yet?</a>
    </div>
  );
}

export default Login;
