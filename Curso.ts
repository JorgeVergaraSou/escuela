import Alumno from "./Alumno"
import Profesor from "./Profesor"
import Materia from "./Materia"

export default class Curso {
    nombre: string;
    alumnos: [];
    constructor(nombre: string){
        this.nombre = nombre;
        this.alumnos = [];
   
    }
}

