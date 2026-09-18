# BarberFlowBR V5.2 — FIX disponibilidad y horarios

## Corrección principal
V5.1 convirtió el sistema a horarios exactos, pero una base D1 que todavía tenía el formato antiguo `[[inicio,fin], ...]` quedaba interpretada como una lista inválida y Reservar terminaba mostrando "No quedan horarios disponibles".

V5.2 agrega compatibilidad de lectura con ese formato antiguo **sin volver a generar horarios intermedios**.

### Regla
- Formato nuevo: `['15:00','15:30','16:00']` → se usan exactamente esas horas.
- Formato antiguo: `[['15:00','20:00'],['21:00','22:00']]` → se conservan solamente los **inicios configurados** (`15:00`, `21:00`).
- Nunca se generan automáticamente `12:30`, `12:45`, `15:15`, etc.
- Para obtener una lista exacta completa, Santi puede cargar las horas individuales desde Gestión → Horarios exactos.

## Verificación
- `node --check worker.js` OK.
- Prueba de compatibilidad con formato antiguo OK.
- Prueba de formato nuevo OK.
- No hay generación de inicios cada 15 minutos desde el calendario.
