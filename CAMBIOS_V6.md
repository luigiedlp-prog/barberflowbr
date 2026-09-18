# BarberFlowBR V6

## Cambios principales
- Gestión pasa a ser la fuente de verdad de horarios exactos: cada día acepta una lista de horas individuales (coma o salto de línea).
- Compatibilidad con horarios antiguos por intervalos: al editar/guardar se pueden convertir a horarios exactos.
- Un turno puede empezar en el último horario configurado aunque termine después del cierre habitual (ej.: 19:45).
- Promociones persistentes en D1, con selección de uno, varios o todos los servicios.
- Descuento porcentual y 2x1.
- Activación manual + activación/expiración automática por fecha/hora Argentina.
- Promociones aplicadas en servidor al reservar; el navegador no puede imponer el precio.
- Historial de promoción/precio guardado en el turno.
- 2x1 reserva dos cupos consecutivos por el precio de uno.
- Se pueden tener promociones activas diferentes para servicios distintos.
- Logos y fotos usan placeholders de GitHub estables; no se regeneran al seleccionar servicio.
- Seleccionar servicio en Reservar no desmonta las tarjetas de fotos.
- Eliminada la causa conocida de `minutes is not defined` al activar/desactivar promociones.

## Pruebas realizadas
- `node --check worker.js`: OK.
- Sintaxis JS de Reservar y Gestión: OK.
- Pruebas puras de backend: OK (horarios exactos, compatibilidad legacy, fechas AR, 10%, 2x1).
- Playwright Reservar: OK (promo 10%, fotos/DOM, selección de servicio, horarios exactos).
- Playwright Reservar 2x1: OK (precio normal, duración duplicada).
- Playwright Gestión: OK (tarjeta de promo + editor de horarios exactos).
- Stress de lógica de horarios: 100.000 iteraciones sin errores.
- Stress del handler `/api/availability` con D1 mock: 5.000 requests concurrentes, 5.000 respuestas 200.

Las pruebas locales no equivalen a una prueba contra el Worker publicado ni contra una base D1 de producción.
