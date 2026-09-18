# BarberFlowBR V4.1 — correcciones UI

## Gestión
- El menú desplegable de WhatsApp ahora se abre dentro del flujo normal del turno (`position: static`), por lo que empuja los turnos siguientes en lugar de superponerlos.
- La hora de cada turno tiene una columna dedicada, contraste alto y formato destacado.

## Reservas
- Eliminada la barra decorativa superior duplicada; queda una sola línea de encabezado.
- Logo principal y logo circular usan los assets reales del repositorio mediante URLs de GitHub.
- Las fotos de servicios usan los archivos reales existentes en `catalogo/`.
- Se mantienen los nombres reales: `corte-comun.jpg`, `corte-barba.jpg`, `mechas.jpg`, `global.jpg`.

## Validaciones
- `node --check worker.js`: OK
- Assertions estáticas de assets/layout: OK
- Prueba visual estática con Chromium a 390×844: OK
- Apertura de WhatsApp y desplazamiento del segundo turno debajo del primero: OK
- Verificación de hora `15:00`: OK

Nota: la conexión GitHub disponible para esta sesión permitió lectura pero devolvió HTTP 403 al intentar crear una rama. Por eso este paquete contiene los cambios listos, pero no se pudo hacer push automático a `main` desde esta sesión.
