import { Todo } from "./models/todo.model";
import * as fromTodo from "./todo.actions";

var estadoInicial: Todo[] = [];

export function todoReducer(state: Todo[] = estadoInicial, accion: fromTodo.Acciones): Todo[]{

    switch (accion.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(accion.texto);
            return [...state, todo];
                
        default:
            return state;
    }
}