# BarberFlowBR V5.1 — correcciones de UI, logos y horarios exactos

## Corregido
- Gestión → Promociones vuelve a usar una tarjeta visual real (no texto suelto).
- La tarjeta muestra tipo de promo, servicios, vigencia, estado y botones Editar / Activar-Desactivar / Eliminar.
- El editor de promoción lista TODOS los servicios online configurados.
- Tipo `Descuento por porcentaje` y tipo `2×1`.
- En `2×1`, el porcentaje queda desactivado y se guarda como 0.
- Se mantiene la activación/desactivación y vigencia automática de la promoción.
- Se eliminaron las referencias que podían terminar mostrando `minutes is not defined` desde la interfaz de Gestión.
- Logo y logo circular se sirven por rutas propias del Worker (`/logo.png`, `/logo-circular.png`).
- Las fotos del catálogo se sirven por `/catalogo/...` mediante el Worker, evitando depender de que el navegador pueda leer directamente GitHub Raw.
- Reservar mantiene las fotos montadas al seleccionar un servicio.
- Reservar muestra Global y Mechas con 10% cuando la promoción activa corresponde.

## Horarios: cambio importante
La disponibilidad ya NO genera automáticamente horarios cada 15 minutos desde un rango.

Gestión ahora permite cargar horas individuales por día:
- `10:00`
- `10:30`
- `11:00`
- etc.

Reservar publica únicamente esas horas exactas.

Las bases existentes que todavía tengan el formato antiguo `[inicio, fin]` no se convierten inventando horarios. Gestión muestra únicamente los extremos del rango antiguo para poder reconstruir el calendario exacto y guardarlo. Esto evita volver a generar 12:30, 12:45 u otras horas que Santi no haya cargado explícitamente.

## Verificaciones realizadas
- `node --check worker.js` OK.
- HTML de Reservar extraído y renderizado localmente: promo banner + 4 servicios + 2 tarjetas promocionales.
- Editor de promociones: 4 servicios detectados; al elegir `2×1`, el campo de porcentaje queda deshabilitado y en 0.
- Gestión: tarjeta de promoción renderiza como tarjeta, con 3 acciones.
- Sin `<style>` anidado en la sección de promociones.
- No queda el texto literal `minutes is not defined` en el bundle.

## Importante
Este ZIP contiene el código corregido, pero no está desplegado automáticamente en el Worker publicado. Debe reemplazarse el `worker.js` del repositorio y desplegarse con la configuración habitual del proyecto.
