import { Todo } from "./todo/models/todo.model";

export interface AppState {
    todos: ReadonlyArray<Todo>;
}