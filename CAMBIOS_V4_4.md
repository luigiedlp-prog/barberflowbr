# BarberFlowBR V4.4 — Promoción automática Global + Mechas

## Cliente / Reservar
- Global y Mechas tienen una tarjeta promocional violeta + dorado cuando la promoción está activa para la fecha elegida.
- Etiqueta `PROMOCIÓN EXCLUSIVA` y badge `10% OFF`.
- Precio promocional: Global $72.000 (antes $80.000) y Mechas $54.000 (antes $60.000).
- La fecha promocional configurada por defecto es 18/09/2026–19/09/2026.
- La selección de fecha promocional puede iniciar automáticamente en el comienzo de la promo cuando está dentro de los próximos 3 días.
- El descuento real se calcula en el servidor al reservar desde la app; no depende solamente del navegador.
- Al terminar la fecha final, las tarjetas y precios vuelven a la presentación normal automáticamente.
- Las imágenes de catálogo mantienen URLs estables (`?v=4.2`) y la pantalla de Reservar conserva las imágenes al cambiar servicio/día, evitando recargas innecesarias.

## Gestión / Santi
- Nueva tarjeta `Promoción` dentro de Servicios.
- Muestra estado, fechas, descuento, servicios y texto actual.
- Botón `Editar promoción` para activar/desactivar, cambiar porcentaje, fechas, servicios, etiqueta y texto.
- La promoción se guarda en `bf_settings.promo_json` y se desactiva automáticamente fuera del rango configurado.

## API / Base de datos
- Nueva columna idempotente `bf_settings.promo_json`.
- Nuevo endpoint privado `POST /admin/promo`.
- `/public` expone la configuración promocional.
- `/book` aplica el precio promocional solamente a reservas online que coincidan con fecha + servicio.
- Los turnos creados manualmente desde Gestión conservan el precio normal.

## Horarios exactos
- Se conserva la lógica V4.3: Reservar toma únicamente las horas exactas configuradas por Santi.
- Se corrigieron las expresiones regulares del panel de horarios que podían perder `\\d` al quedar embebidas en el bundle.

## Validaciones realizadas
- `node --check worker.js`: OK.
- Scripts embebidos de Reservar y Gestión: `node --check`: OK.
- Prueba de lógica promocional: 18/09 y 19/09 aplican 10%; 20/09 no aplica; otros servicios no reciben descuento: OK.
- Prueba de horarios exactos: no se generan horas intermedias: OK.
- Aserciones estáticas de ruta, almacenamiento, precio promocional, tarjetas y caché de imágenes: OK.
- ZIP verificado con `unzip -t`.

Nota: la captura incluida es una previsualización visual; el ejecutable Chromium del entorno actual no permitió completar una captura automática del HTML real.
