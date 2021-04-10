import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { useStore } from "react-redux";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Loading from "../components/Loading";
import TodoItem from "../components/TodoItem";
import { RootState } from "../store";
import { LOGOUT_SESSION } from "../store/session/types";
import { CREATE_TODO, Todo } from "../store/todos/types";

const Todos = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  const store = useStore<RootState>();
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    session: { profile },
    todos,
  } = store.getState();

  // TODO: fetch todos from server
  useEffect(() => {
    setLoading(false);
  });

  // createTodo will make a request to the api server.
  // If the server returns a todo, store in the global store.
  const createTodo = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<Todo>(`localhost:8080/${profile?.id}/todos`, {
        title,
      });
      dispatch({ type: CREATE_TODO, payload: res });
    } catch (err) {
      console.error(err);
    }
  };

  // logout clears the user session and redirects the user back to the login-page.
  const logout = () => {
    dispatch({ type: LOGOUT_SESSION });
    history.replace("/login");
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <h1>Hello, {profile?.name}!</h1>
      <button onClick={logout} style={{ color: "#magenta" }}>
        Logout
      </button>
      <form onSubmit={createTodo}>
        <label htmlFor="todoTitle">
          <input
            type="text"
            name="todoTitle"
            id="todoTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={2}
          />
        </label>
        <button>Add new todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
