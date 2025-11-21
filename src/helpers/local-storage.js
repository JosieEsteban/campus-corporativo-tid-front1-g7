import { cursos } from "../models/modelCursos.js";

export function inicializarLocalStorage() {
  if (!localStorage.getItem("cursos")) {
    localStorage.setItem("cursos", JSON.stringify(cursos));
  }
  if (!localStorage.getItem("inscripciones")) {
    localStorage.setItem("inscripciones", JSON.stringify([]));
  }
  if (!localStorage.getItem("usuarioActivo")) {
    localStorage.setItem("usuarioActivo", JSON.stringify({ id: 1, nombre: "Usuario Test" }));
  }
}