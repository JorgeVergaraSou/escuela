import Curso from "./Curso";

export default abstract class Persona{
    nombre: string;
    apellido: string;


    constructor(nombre: string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
  
    }
}