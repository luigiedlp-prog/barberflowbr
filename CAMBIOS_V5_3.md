# BarberFlowBR V5.3 — FIX URGENTE DE HORARIOS

- Corrige la lectura del calendario D1 cuando los días vienen como claves numéricas o nombres en español.
- Compatible con formato exacto (`["10:00","10:30"]`) y formato histórico por rangos (`[["10:00","20:00"]]`).
- El formato histórico conserva únicamente el INICIO de cada bloque; nunca genera horarios intermedios.
- Si existe un día configurado vacío, se respeta vacío y no se reemplaza por horarios por defecto.
- La disponibilidad pública y la validación de reserva usan exactamente la misma fuente de horarios.
- Se mantiene la corrección de promociones, logos y fotos de V5.2.
