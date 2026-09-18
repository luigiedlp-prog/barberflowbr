# BarberFlowBR V5 — Promociones corregidas

## Qué cambia
- Promociones persistentes en D1 (`bf_promotions`).
- Gestión > Servicios > Promociones ahora muestra **todos los servicios online** disponibles para seleccionar.
- Tipos disponibles:
  - **Descuento por porcentaje** (1–100%).
  - **2×1**. Al elegir 2×1, el campo de porcentaje queda desactivado y se guarda en 0.
- Una promoción puede incluir uno, varios o todos los servicios.
- Inicio y fin configurables desde Gestión.
- Activar/desactivar/eliminar/editar una promoción desde Gestión.
- La promoción se activa y vence automáticamente por fecha/hora de Argentina.
- El precio promocional se calcula también en `/api/book` del servidor; el cliente no puede imponer un precio distinto.
- El precio 2×1 conserva el precio normal de una reserva y muestra la condición 2×1.
- Se eliminó la dependencia del handler de desactivación que provocaba el error `minutes is not defined`.
- Fotos de Reservar usan URL estable de GitHub y no `Date.now()`, evitando que se vuelvan a pedir al seleccionar servicio.
- Seleccionar servicio ya no reconstruye toda la pantalla de Reservar: se actualiza la selección y horarios sin desmontar las tarjetas de fotos.
- La promoción inicial solicitada queda precargada: Global + Mechas, 10%, desde 18/09/2026 00:00 hasta 20/09/2026 00:00 (hora Argentina).

## Verificación realizada
- `node --check worker.js`: OK.
- Render local de Reservar con promoción: OK; Global 80.000 → 72.000 y Mechas 60.000 → 54.000.
- Editor de Gestión: 4 checkboxes de servicios detectados (Corte, Corte + barba, Global, Mechas).
- Selector 2×1: el campo de porcentaje queda deshabilitado y en 0.
- Click en Desactivar promoción: no genera `minutes is not defined` en el render de prueba.
- La captura incluida es un render local del código exacto; no es una captura del dominio publicado.
