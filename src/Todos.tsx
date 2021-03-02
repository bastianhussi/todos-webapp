import React, { FormEvent } from "react";

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

const Todos = () => {
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

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitForm}>
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
