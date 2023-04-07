import Alumno from "./Alumno";
import Profesor from "./Profesor";
import Materia from "./Materia";
import Curso from "./Curso";

export default class GestorColegio{
    nombre : string;
    alumnos: Alumno[];
    cursos: Curso[];
    materias: Materia[];
    profesor: Profesor[];

    constructor(nombre: string){
        this.nombre = nombre;
        this.alumnos = [];
        this.cursos = [];
        this.materias = [];
        this.profesor = [];
    }

    matricularAlumno(nombre: string, apellido: string, curso: Curso){
      let  newAlumno = new Alumno(nombre, apellido, curso);
        console.log(newAlumno);
        return newAlumno;
        
    }
}