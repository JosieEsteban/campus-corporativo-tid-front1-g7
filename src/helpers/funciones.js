export function $(id) {
return document.getElementById(id);
}

export function crearElemento(tag, clases = [], texto = "") {
const el = document.createElement(tag);
if (Array.isArray(clases)) el.classList.add(...clases);
if (texto) el.textContent = texto;
return el;
}


export function aNumero(valor, fallback = 0) {
const n = Number(valor);
return isNaN(n) ? fallback : n;
}

export function formatearFecha(fechaISO) {
const fecha = new Date(fechaISO);
return fecha.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
}

export function limpiarNodo(nodo) {
while (nodo.firstChild) nodo.removeChild(nodo.firstChild);
}