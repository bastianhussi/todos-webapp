import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { LoginState, LOGIN_SESSION } from "../store/session/types";
import styled from "styled-components";
import { Button, FormField } from "../components/Form";

const LoginHeader = styled.h1`
  text-align: center;
  color: black;
`;

const LoginPanel = styled.div`
  background: aqua;
  width: 70%;
  max-width: 700px;
  margin: 0 auto;
  padding: 25px 25px;
`;

const LoginFooter = styled.div`
  position: absolute;
  text-align: center;
  bottom: 0;
  background-color: white;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

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
    <>
      <LoginHeader>Login</LoginHeader>
      <LoginPanel>
        <form onSubmit={(e) => submit(e)}>
          <FormField>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Button type="submit">Login</Button>
          </FormField>
        </form>
        <a href="/register">No account yet?</a>
      </LoginPanel>
      <LoginFooter>Hello</LoginFooter>
    </>
  );
}

export default Login;
