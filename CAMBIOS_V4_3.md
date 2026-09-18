# BarberFlowBR V4.3 — horarios exactos

## Corrección principal
- Los horarios disponibles para reservar ahora salen de las horas exactas configuradas en Gestión.
- Ya no se generan automáticamente horarios intermedios de 15 minutos a partir de un intervalo.
- Santi puede agregar o quitar cada hora individualmente desde Gestión → Servicios → Horarios exactos.
- Los horarios existentes guardados como intervalos se siguen interpretando de forma compatible hasta que Santi los guarde como horarios exactos.
- La API de reserva y la creación/edición manual de turnos usan la misma lista exacta, evitando que se pueda reservar una hora que no esté configurada.

## Ejemplo
Si Santi configura:
- 10:00
- 10:30
- 11:00
- 11:30
- 12:00

Reservar mostrará únicamente esas horas. No aparecerán 12:15, 12:30, 12:45, etc.

## Validación
- `node --check worker.js` OK.
- Prueba de horarios exactos OK.
- Compatibilidad con horarios antiguos por intervalos OK.
- ZIP verificado con `unzip -t`.
