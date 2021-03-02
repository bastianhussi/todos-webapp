import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useStore } from "react-redux";
import { SessionState } from "../store/session/types";

type Todo = {
  id: number;
  title: string;
  createdAt: Date;
  profileId: number;
};

type Props = { color: string } & Todo;

const Todo = (props: Props) => {
  const { title, color } = props;
  return (
    <li
      style={{
        backgroundColor: color,
        marginTop: 12,
        padding: 3,
        border: "2px solid black",
        width: "-moz-fit-content",
      }}
    >
      {title}
    </li>
  );
};

const todos: Array<Todo> = [
  {
    id: 0,
    title: "Walk the dog",
    createdAt: new Date(2021, 3, 2),
    profileId: 1,
  },
  {
    id: 1,
    title: "Shopping for groceries",
    createdAt: new Date(2021, 3, 29),
    profileId: 1,
  },
  {
    id: 2,
    title: "Learn React.js",
    createdAt: new Date(2021, 2, 22),
    profileId: 3,
  },
];

const Todos = () => {
  const [title, setTitle] = useState("");
  const store = useStore<SessionState>();

  const { user } = store.getState();

  const submitForm = async (e: FormEvent) => {
    // FIXME: find more elgant way ensuring that user is not undefined.
    // The user cant be undefined because if he was this page would not be shown.
    if (!user) return;

    e.preventDefault();
    await axios.post(`localhost:6000/${user.id}/todos`, {
      title,
    });
    try {
    } catch (err) {
      console.error(err);
    }
  };

  // TODO: add styling! Use emotion?

  return (
    <>
      <h1>Hello, {user?.name}!</h1>
      <form onSubmit={submitForm}>
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
          <Todo color="#fdf2f4" key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
