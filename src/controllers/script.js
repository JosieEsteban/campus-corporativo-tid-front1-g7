
const form = document.querySelector(".formulario");

function mostrarError(mensaje) {
    Swal.fire({
        icon: "error",
        title: "Validación",
        text: mensaje,
    });
}


form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    
    const fecha = document.getElementById("fechaNacimiento").value;
    
    const correo = document.getElementById("correo").value.trim();
    
    const celular = document.getElementById("celular").value.trim();
    
    const curso = document.getElementById("curso").value;

    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNumero = /^[0-9]{10,}$/;

    if (!nombre || !apellido || !fecha || !correo || !celular || !curso || curso === "") {
        return mostrarError("Por favor completa todos los campos obligatorios.");
    }

    if (!regexNombre.test(nombre) || !regexNombre.test(apellido)) {
        return mostrarError("Nombre y apellido solo deben contener letras.");
    }

    if (!regexCorreo.test(correo)) {
        return mostrarError("Formato de correo inválido.");
    }

    if (!regexNumero.test(celular)) {
        return mostrarError("El número de celular debe ser numérico y tener al menos 10 dígitos.");
    }

    if (curso === "Farmacología") {
        return mostrarError("Este curso está lleno. Selecciona otro.");
    }

    Swal.fire({
        icon: "success",
        title: "Formulario enviado correctamente",
        text: "Serás direccionado a la página de confirmación.",
        timer: 1500,
        showConfirmButton: false,
    }).then(() => {
        window.location.href = "/campus-corporativo-tid-front1-g7-modulo-3-gestion-de-inscripciones/src/pages/confirmacion.html";
    });
});
