// src/controllers/controllerDetalleCurso.js
import { setData } from "../helpers/local-storage.js";

const btnInscribirme = document.getElementById("btnInscribirme");

btnInscribirme.addEventListener("click", () => {
const idCurso = btnInscribirme.dataset.id;

setData("cursoSeleccionado", idCurso);

window.location.href = "./proceso-inscripcion.html";
});
