const cursoId = localStorage.getItem("cursoSeleccionado");
const cursos = JSON.parse(localStorage.getItem("cursos"));
const curso = cursos.find(c => c.id == cursoId);
document.getElementById("mensaje").textContent =
  `Te inscribiste al curso: ${curso.nombre}`;