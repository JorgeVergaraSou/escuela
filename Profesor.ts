import Persona from "./Persona"
import Alumno from "./Alumno"
import Materia from "./Materia"

export default class Profesor extends Persona {
   
    contrato: boolean;

    constructor(nombre: string, apellido: string){
        super(nombre, apellido)
        this.contrato = true;
    }
}