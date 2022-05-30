import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as fromTodo from "./todo.actions";

export const  estadoInicial: ReadonlyArray<Todo> = [];

export const todoReducer = createReducer(
    estadoInicial,
    on(fromTodo.agregarTodoAction, (state, {tarea}) => {
        const nuevoTodo = new Todo(tarea);
        return [...state, nuevoTodo];
    })
);
