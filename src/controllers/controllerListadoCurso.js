// src/controllers/controllerListadoCurso.js
import { getData } from "../helpers/local-storage.js";

const tabla = document.getElementById("tbodyCursos");

const usuario = getData("usuarioActivo");

if (!usuario) {
tabla.innerHTML = `
    <tr><td colspan="4">Inicia sesión para ver tus cursos</td></tr>
`;
} else {

const inscripciones = getData("inscripciones");
const cursos = getData("cursos");

const misInscripciones = inscripciones.filter(
    ins => ins.idUsuario === usuario.id
);

if (misInscripciones.length === 0) {
    tabla.innerHTML = `
    <tr><td colspan="4">No tienes cursos inscritos</td></tr>
    `;
} else {
    misInscripciones.forEach((ins) => {
    const curso = cursos.find(c => c.id == ins.idCurso);

    tabla.innerHTML += `
        <tr>
        <td>${curso.nombre}</td>
        <td>${curso.duracion}</td>
        <td>${ins.fecha}</td>
        <td><button class="btn-mas">Ver más</button></td>
        </tr>
    `;
    });
}
}
