 
 
 
     Descripción y documentación técnica/funcional del Módulo 3: Gestión de Inscripciones


    El módulo Gestión de Inscripciones y/o Matricula, permite a los usuarios inscribirse en los cursos disponibles, 
    visualizar sus cursos activos y confirmar su participación en ellos, asi como darse de baja de los cursos que no 
    sean obligatorios. Incluye las páginas: Estado-matricula.html, Matricula.html




       Nombre de los Integrantes del equipo Módulo 2: Catálogo de Cursos

       1. Josie Esteban Castro Prisco
       2. Jaider Rendon Ciro
       3. Emanuel pabon barrera 
       4. Sara vera mora 
       5. Kahori muñoz restrepo
       6. Felipe sierra gomez

       *************************************************************************************************************************************

        Módulo 3: Gestión de Inscripciones


Objetivo del Módulo: Simular un flujo de usuario que involucra múltiples páginas, guardando el estado de la inscripción en localStorage.

Páginas involucradas: detalle-curso.html, proceso-inscripcion.html, mis-cursos.html

Lista de Requerimientos:

 Guardar Estado (detalle-curso.html): Al accionar el botón "Inscribirme", el script debe guardar el id del curso seleccionado en localStorage (para ser leído por la siguiente página).
 Leer Estado (proceso-inscripcion.html): Al mostrar esta página, el script debe leer el id del curso, buscar los detalles completos (leyendo cursos de localStorage) y pintar esa información en la página.
 Simular Inscripción: Al confirmar la inscripción en proceso-inscripcion.html, el script debe simular la inscripción (guardando un nuevo objeto de inscripción en el arreglo inscripciones OBLIGATORIAMENTE en localStorage).
 Redirección: Redirigir automáticamente a confirmacion.html tras la inscripción.
 Renderizado de Tabla (mis-cursos.html): La sección de la tabla donde van los datos debe estar vacía en el HTML.
 Lógica de Tabla (Desacoplada): Al mostrar la página, el script debe:
Verificar si existe un identificador de usuario en localStorage (el usuarioLogueado).
Si existe, filtrar el arreglo inscripciones (de localStorage) por ese usuario y buscar los datos del curso (de localStorage).
Generar dinámicamente las filas de la tabla con los cursos e insertarlas.
Si NO existe usuario, la tabla debe mostrar un estado vacío o un mensaje (ej. "Inicia sesión para ver tus cursos"). La página no debe generar un error.