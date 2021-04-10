import { CHANGE_TODO, CREATE_TODO, DELETE_TODO, Todo, TodoActionTypes, TodoUpdate } from "./types";

export const createTodo = (todo: Todo): TodoActionTypes => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id: number): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const changeTodo = (todo: TodoUpdate): TodoActionTypes => {
  return {
    type: CHANGE_TODO,
    payload: todo,
  };
};
