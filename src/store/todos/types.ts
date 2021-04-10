// Todo is an item in the users checklist
export type Todo = {
  id: number;
  title: string;
  done: boolean;
  createdAt: Date;
};

export type TodoUpdate = {
  id: number;
  title?: string;
  done?: boolean;
};

export type TodosState = Array<Todo>;

export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGE_TODO = "CHANGE_TODO";

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface ChangeTodoAction {
  type: typeof CHANGE_TODO;
  payload: TodoUpdate;
}

export type TodoActionTypes = CreateTodoAction | DeleteTodoAction | ChangeTodoAction;
