# Incidencias y solicitudes

## Clasificación

### Incidencia

Es una interrupción o reducción de la calidad normal de un servicio. Requiere restaurar la operación y comunicar el impacto.

### Solicitud

Es una petición planificada y autorizada, normalmente repetible, que no implica que el servicio esté fallando.

### Problema

Es la causa desconocida o subyacente de una o varias incidencias. Su tratamiento busca evitar que el caso vuelva a ocurrir.

### Cambio

Es una modificación controlada de una aplicación, configuración, infraestructura o proceso. Debe considerar impacto, responsable, ventana de trabajo y plan de reversión.

## Priorización

La prioridad debe calcularse considerando impacto y urgencia, no solo el orden de llegada.

| Prioridad | Criterio orientativo | Acción |
| --- | --- | --- |
| Crítica | Servicio principal caído, pérdida de datos o muchos usuarios afectados. | Atención inmediata y comunicación frecuente. |
| Alta | Función importante degradada, sin alternativa razonable. | Asignación prioritaria y seguimiento cercano. |
| Media | Afectación parcial con alternativa disponible. | Resolver dentro del tiempo acordado. |
| Baja | Consulta, mejora o afectación menor. | Planificar y atender según capacidad. |

La prioridad final debe ajustarse al contrato, al acuerdo con el cliente y al impacto real.

## Diagnóstico inicial

1. Confirmar el alcance y el entorno afectado.
2. Verificar si el problema es reproducible.
3. Revisar cambios recientes, despliegues y dependencias.
4. Consultar incidencias conocidas y la base de conocimiento.
5. Registrar evidencias sin incluir secretos.
6. Definir una mitigación cuando la solución definitiva requiera más tiempo.

## Escalamiento técnico

Un caso debe escalarse cuando requiere permisos especiales, afecta producción, implica seguridad, no puede reproducirse con la información disponible, supera el tiempo acordado o necesita cambios de código o infraestructura.

El escalamiento debe incluir un resumen, impacto, prioridad, evidencias, acciones ya realizadas, hipótesis actuales y la decisión que se necesita del equipo receptor.