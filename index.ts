import Alumno from "./Alumno"
import Materia from "./Materia"
import Profesor from "./Profesor"
import Curso from "./Curso"
import GestorColegio from "./GestorColegio"

let mecanicaAuto = new Curso ('Mecanica de Autos')
let jorge = new Alumno('jorge', 'vergara', mecanicaAuto)

let flavia = new Profesor('flavia','bilbao')
let bujias = new Materia('Bujias', flavia)

let secundariaSexta = new GestorColegio('High School')

let aer = secundariaSexta.matricularAlumno('maru','bilbao',mecanicaAuto)

console.log('final: ',aer);
