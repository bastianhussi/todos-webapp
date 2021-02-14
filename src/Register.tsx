import React, { FormEvent, useState } from "react";
import axios from "axios";

/**
 * @return {JSX.Element} Register Element
 */
function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
        passwordConfirm,
      });
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
        <label htmlFor="name">
          Email
          <input
            type="text"
            name="name"
            id="name"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <label htmlFor="passwordConfirm">
          Password
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder=""
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register now</button>
      </form>
      <a href="/login">Already have an account?</a>
    </div>
  );
}

export default Register;
