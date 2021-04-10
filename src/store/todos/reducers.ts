import { CHANGE_TODO, CREATE_TODO, DELETE_TODO, TodoActionTypes, TodosState } from "./types";

const initialState: TodosState = [
  {
    id: 0,
    title: "Walk the dog",
    createdAt: new Date(2021, 3, 2),
    done: false,
  },
  {
    id: 1,
    title: "Shopping for groceries",
    createdAt: new Date(2021, 3, 29),
    done: true,
  },
  {
    id: 2,
    title: "Learn React.js",
    createdAt: new Date(2021, 2, 22),
    done: false,
  },
];

const todosReducer = (state = initialState, action: TodoActionTypes): TodosState => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_TODO:
      const { id, title, done } = action.payload;
      const todos = state;
      todos.map((todo) => {
        if (todo.id === id) {
          if (title) todo.title = title;
          if (done) todo.done = done;
        }
      });
      return todos;
    default:
      return state;
  }
};

export default todosReducer;
