# BarberFlowBR V5.1 — reparación de UI, logos y promociones

## Corregido
- Restaurada la tarjeta visual de cada promoción en Gestión; ya no depende solamente de CSS externo y conserva fondo, borde, badge y botones.
- La tarjeta muestra nombre, servicios, vigencia, estado y mensaje.
- La selección de servicios de una promoción sigue tomando **todos los servicios configurados**.
- El editor mantiene los tipos **Descuento %** y **2×1**. En 2×1 el porcentaje queda desactivado y se guarda en 0.
- Activar/desactivar una promoción usa `/admin/promotion/toggle` y no ejecuta ninguna función `minutes()` del navegador, evitando el error `minutes is not defined`.
- Restauradas las rutas de logo y catálogo para Reservar/Gestión usando las URLs reales de GitHub configuradas en el worker, en vez de depender de `/logo.png` o `/catalogo/` dentro del HTML.
- Eliminado el cache-busting con `Date.now()` de esas URLs para que las imágenes no se vuelvan a recrear al seleccionar un servicio.
- Reservar mantiene el DOM de las tarjetas al seleccionar servicio (`pickService` actualiza selección/resumen/horarios sin reconstruir toda la pantalla).
- El cálculo del 10% de la promoción sigue siendo server-side al crear la reserva.

## Verificación realizada
- `node --check worker.js` OK.
- ZIP validado con `unzip -t`.
- Comprobación estática de placeholders de logos/catalogo, tarjeta de promoción, selector de servicios y endpoints de promoción.
- Render local de las rutas HTML comprobado para la tarjeta de promoción y la estructura visual. Las imágenes remotas no pueden descargarse desde este entorno de prueba, pero las URLs quedan apuntando al repositorio real configurado.

## Instalación
Reemplazar el `worker.js` actual por el de este ZIP y desplegar con la configuración existente de `wrangler.toml`.
