export function mostrarAlerta(mensaje, tipo = "info") {
const alerta = document.getElementById("alerta");
if (!alerta) return console.warn("No existe un contenedor de alerta en la página.");

alerta.textContent = mensaje;
alerta.className = `alerta mostrar ${tipo}`;

setTimeout(() => {
    alerta.className = "alerta oculto";
}, 3000);
}


export function limpiarAlerta() {
const alerta = document.getElementById("alerta");
if (alerta) alerta.className = "alerta oculto";
}