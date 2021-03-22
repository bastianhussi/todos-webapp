/* import axios from "axios"; */
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { LoginState, LOGIN_SESSION } from "../store/session/types";

/**
 * @return {JSX.Element} Login Element
 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<LoginState>(
        "/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: LOGIN_SESSION,
        payload: res.data,
      });

      history.replace("/");
    } catch (err) {
      if (err.response) {
        const { data, status, headers } = err.response;
        console.log(data);
        console.log(status);
        console.log(headers);
      } else {
        console.error(err);
      }
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
