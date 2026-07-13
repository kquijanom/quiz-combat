# Contexto del Proyecto: Plataforma de Duelos de Conocimiento

## Idea

Plataforma de duelos de conocimiento asincrónicos pensada para un **grupo cerrado** (un curso o un grupo de amigos, no una audiencia abierta). Los usuarios eligen un tema **objetivo** (sin ambigüedad ni interpretación subjetiva), la IA genera un banco de preguntas de opción múltiple para ese tema, y compiten en duelos 1v1 de forma asincrónica: cada uno responde cuando puede, sin necesidad de coincidir en horario.

## Público objetivo

- Grupo cerrado por invitación (compañeros de curso o amigos).
- Se conocen entre sí, lo que hace que la confianza en la calidad de las preguntas y la justicia del sistema sean críticas (un error de la IA o una sensación de injusticia se nota rápido en un grupo chico).

## Decisiones de diseño ya validadas

- **Solo temas objetivos**, nunca subjetivos (se descartó explícitamente incluir temas de interpretación abierta, como crítica literaria u opiniones, por el riesgo de preguntas ambiguas).
- **Duelos asincrónicos**, no en vivo: cada jugador responde cuando puede.
- **Resultados preliminares post-envío**: al enviar tus respuestas, podés ver cómo van los demás participantes hasta ese momento — pero nunca antes de enviar las tuyas. Esto evita el incentivo a demorar la respuesta para "espiar" cómo les fue a otros antes de jugar (sandbagging).
- **Matchmaking por nivel/racha**, no un ranking global único, para que competir siga siendo motivador incluso en un pool chico de usuarios (evita que los que pierden seguido contra los mismos jugadores se desmotiven y abandonen).

## Los 6 features clave

1. **Duelos asincrónicos por tema** — el usuario elige un tema objetivo, la IA genera el banco de preguntas, duelo 1v1.
2. **Resultados preliminares post-envío** — mecanismo anti-sandbagging: solo se ven resultados de otros después de haber respondido.
3. **Impugnación de preguntas en vivo** — cualquier jugador puede marcar una pregunta como mal formulada o ambigua durante el duelo.
4. **Matchmaking por nivel/racha** — empareja por nivel similar en vez de usar un ranking global.
5. **Grupo cerrado por invitación** — solo entra quien sea invitado (curso o amigos).
6. **Historial/progreso individual por tema** — el usuario puede ver su evolución en cada tema a lo largo del tiempo.

## Validación ya realizada

Se probó a mano (sin plataforma) un duelo real: se generaron 10 preguntas con IA sobre un tema objetivo (historia argentina, 1810-1830) y se jugaron con un compañero real. Resultado: ninguna pregunta salió errada o ambigua. Esto valida parcialmente el riesgo de calidad de la IA, aunque solo se probó con **un** tema — se recomienda repetir la prueba con 1-2 temas objetivos adicionales (por ejemplo, ciencias o programación) antes de asumir que la IA nunca falla.

## Riesgos abiertos (pendientes de resolver o documentar en el spec)

1. **Calidad de la IA generando preguntas** — validado en un solo tema; falta confirmar con más temas objetivos antes de asumirlo como resuelto.
2. **Retención en un pool chico de usuarios** — con matchmaking por nivel en un grupo de 15-30 personas, puede no haber nadie disponible del mismo nivel en un momento dado. El spec debe definir qué pasa en ese caso (¿esperar?, ¿emparejar igual con otro nivel?).
3. **Mecanismo de resolución de impugnaciones** — está definido que existe la impugnación (feature #3), pero falta definir quién decide si es válida: ¿se anula el punto automáticamente, se repite la pregunta, decide un admin (el propio usuario/dueño del grupo)?

## Siguiente paso

Definir el mecanismo de resolución de impugnaciones (riesgo #3) antes de redactar el documento de spec completo, ya que es la pieza menos definida y la más rápida de cerrar sin necesitar más pruebas.
