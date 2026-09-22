# Operación del HelpDesk

## Definición

Un HelpDesk es una función organizada de soporte que actúa como punto único de contacto entre las personas usuarias y el equipo que presta un servicio. Recibe casos, los registra, los clasifica, coordina su resolución y comunica el resultado.

En CodeWebAI, el HelpDesk combina atención al cliente, soporte operativo y coordinación de proyectos. Por eso cada caso debe conservar el contexto del cliente, el proyecto afectado, el impacto y los compromisos adquiridos.

## Tipos de atención

| Tipo | Descripción | Ejemplo |
| --- | --- | --- |
| Consulta | Solicitud de información o explicación. | Preguntar por el estado de una funcionalidad. |
| Solicitud de servicio | Petición planificada que requiere una acción. | Solicitar un usuario o un reporte. |
| Incidencia | Interrupción o comportamiento incorrecto de un servicio. | Una pantalla no carga para un cliente. |
| Cambio | Modificación planificada sobre un sistema o proceso. | Programar una actualización en producción. |
| Problema | Causa subyacente de una o varias incidencias. | Error recurrente después de cada despliegue. |
| Requerimiento de proyecto | Necesidad funcional, entregable o decisión del proyecto. | Ajustar el alcance de una historia. |

## Flujo general

```text
Recepción -> Registro -> Clasificación -> Priorización -> Asignación
    -> Diagnóstico -> Comunicación -> Resolución o escalamiento
    -> Confirmación -> Cierre -> Documentación
```

## Estados recomendados

- **Nuevo:** el caso fue recibido, pero aún no ha sido revisado.
- **En análisis:** se está recopilando información o reproduciendo el caso.
- **Asignado:** existe una persona o equipo responsable.
- **En espera del cliente:** falta información, aprobación o evidencia del cliente.
- **En espera interna:** depende de otro equipo, proveedor o decisión.
- **En progreso:** se está trabajando en la solución.
- **Resuelto:** se aplicó una solución y se comunicó el resultado.
- **Cerrado:** el caso fue confirmado o cerró después del periodo definido.
- **Cancelado:** la solicitud dejó de ser necesaria o no procede.