# Buenas Practicas

## Estandar de Repositorio
La clonación deberá realizarse utilizando la URL oficial del repositorio correspondiente al proyecto. Después de completar el proceso, el desarrollador deberá verificar que el repositorio local se encuentre correctamente configurado antes de comenzar a realizar modificaciones.

## Buenas Practicas en Ramas
- Evitar trabajar directamente sobre la rama principal: las nuevas funcionalidades, correcciones y modificaciones deberán desarrollarse en una rama independiente.
- Crear una rama por tarea: cada rama deberá estar relacionada con una actividad específica, facilitando su seguimiento y revisión.

- Verificar la rama activa antes de trabajar: se deberá utilizar git status o git branch para confirmar que se está trabajando sobre la rama correspondiente.
- Mantener las ramas actualizadas: antes de integrar cambios se deberá verificar que la rama se encuentre actualizada para reducir posibles conflictos.
- Mantener el alcance de las ramas: una rama deberá concentrarse en una tarea específica, evitando combinar cambios que no estén relacionados entre sí.
- Revisar los archivos antes de realizar un commit: se deberán identificar los archivos modificados y evitar incluir archivos temporales, credenciales, configuraciones privadas o cualquier otro archivo que no corresponda al proyecto.
- Eliminar ramas que ya no sean necesarias: una vez integrada una rama y de acuerdo con las políticas del equipo, deberá eliminarse para mantener el repositorio organizado.