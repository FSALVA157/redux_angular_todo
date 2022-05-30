
export class Todo {
    public id: number;
    public texto: string;
    public completada: boolean;


    constructor(tarea: string){
            this.texto = tarea.charAt(0).toUpperCase + tarea.slice(1);
            this.completada = false;
            this.id = Math.random();
    }
}
// export interface ITodo{
//      id: number;
//      texto: string;
//      completada: boolean;    
// }