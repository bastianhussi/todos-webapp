import React from "react";
import { useState } from "react";
import { Todo } from "../store/todos/types";

// TodoItem is the building block which
// represents a todo item on the dashboard
const TodoItem = (props: Todo) => {
  const { title, done, createdAt } = props;
  const [isDone, setDone] = useState(done);

  // handle events trying to change the state of the checkbox
  const toggleCheckbox = () => {
    setDone(!isDone);
  };

  return (
    <div
      style={{
        backgroundColor: "orange",
        marginTop: 12,
        padding: 3,
        border: "2px solid black",
        width: "-moz-fit-content",
      }}
    >
      <h3>{title}</h3>
      <input type="checkbox" name="done" id="done" checked={isDone} onChange={toggleCheckbox} />
      <p>{createdAt.toString()}</p>
    </div>
  );
};

export default TodoItem;
