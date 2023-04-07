import Persona from "./Persona"
import Profesor from "./Profesor"
import Materia from "./Materia"
import Curso from "./Curso";

export default class Alumno extends Persona {
   
    materias: [{},{},{},{}];
    curso: Curso;

    constructor(nombre: string, apellido: string, curso: Curso){
        super(nombre, apellido)
        this.curso = curso ;
        this.materias = [{
            nombre: "pintura",
            profesor: "josefina peon",
            matriculado : false,
            nota: null
        },{
            nombre: "electricidad",
            profesor: "juan carlos",
            matriculado : false,
            nota: null
        },{
            nombre: "soldadura",
            profesor: "pepe",
            matriculado : false,
            nota: null
        },{
            nombre: "balanceo",
            profesor: "mario matus",
            matriculado : false,
            nota: null
        }];
    }


}
