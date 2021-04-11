import React from "react";
import { render, screen } from "@testing-library/react";

import TodoItem from "./TodoItem";
import { Todo } from "../store/todos/types";

describe("TodoItem", () => {
  const todo: Todo = {
    id: 1,
    title: "Buy milk",
    done: false,
    createdAt: new Date(2021, 3, 12),
  };
  test("renders Todo item", () => {
    render(<TodoItem {...todo} />);
    expect(screen.getByText(todo.title)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
