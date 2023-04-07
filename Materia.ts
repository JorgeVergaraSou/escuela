import Alumno from "./Alumno"
import Profesor from "./Profesor"
import Curso from "./Curso"

export default class Materia {
    nombre: string;
    profesor: Profesor;


    constructor(nombre: string, profesor: Profesor){
        this.nombre = nombre;
        this.profesor = profesor;

    }
}
