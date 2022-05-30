import { createAction, props } from '@ngrx/store';



// export const AGREGAR_TODO = ;

// export class AgregarTodoAction  implements Action{
//     readonly type: string = AGREGAR_TODO;
    
//     constructor(
//         public texto: string
//     ){}
// }

// export type Acciones = AgregarTodoAction; 

export const agregarTodoAction = createAction(
    "[TODO] Agregar Todo",
    props<{
        tarea: string
    }>()
    );