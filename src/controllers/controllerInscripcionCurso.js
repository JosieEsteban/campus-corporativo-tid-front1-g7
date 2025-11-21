const cursoId = localStorage.getItem("cursoSeleccionado");
const cursos = JSON.parse(localStorage.getItem("cursos"));
const curso = cursos.find(c => c.id == cursoId);

document.getElementById("infoCurso").innerHTML = `
  <h3>${curso.nombre}</h3>
  <p>${curso.descripcion}</p>
`;

document.getElementById("btnConfirmar").addEventListener("click", () => {
  const inscripciones = JSON.parse(localStorage.getItem("inscripciones"));
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
  const nueva = {
    id: crypto.randomUUID(),
    usuarioId: usuario.id,
    cursoId,
    fecha: new Date().toISOString()
  };
  inscripciones.push(nueva);
  localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  window.location.href = "./confirmacion.html";
});
