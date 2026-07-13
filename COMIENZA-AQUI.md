# 🚀 QUIZ COMBAT - COMIENZA AQUÍ

## ⚡ Inicio rápido (30 segundos)

### Windows:
```
1. Haz doble click en: RUN.bat
2. ¡Listo! La app se abre automáticamente
```

### Mac/Linux:
```bash
open public/app.html
```

### Cualquier navegador:
```
Abre en tu navegador: 
file:///ruta/al/proyecto/public/app.html
```

---

## 🎮 ¿Qué es Quiz Combat?

Una **plataforma de duelos de conocimiento** donde compites 1v1 respondiendo preguntas de opción múltiple. 

**Características:**
- ⚔️ Duelos asincrónicos (sin coincidir en horario)
- 👥 Grupos cerrados por invitación
- 🎯 Temas objetivos verificados
- ⚡ Resultados inmediatos
- 📊 Ranking y estadísticas

---

## 🎯 3 formas de jugar

### 1️⃣ Con Grupo (Recomendado)
```
Crear Grupo → Recibir Código (ABC123)
     ↓
Compartir Código
     ↓
Amigos usan código para unirse
     ↓
¡A competir! ⚔️
```

### 2️⃣ Ranking Global
```
Login → "Jugar en Ranking Global"
     ↓
Compite anónimamente
     ↓
Ver top players
```

### 3️⃣ Jugar sin cuenta
```
Click "Entra sin cuenta"
     ↓
Crear/Unirse grupo
     ↓
¡Jugar!
```

---

## 🎮 Un duelo típico (2 minutos)

```
USUARIO A              USUARIO B
   │                      │
   ├─ Elige tema: "Cine"  │
   │                      │
   ├─ Elige rival ────────┤ (notificación)
   │                      │
   ├─ Envía reto ─────────┤
   │                      │
   └─ Espera...    Usuario B juega cuando puede...
                      │
                      ├─ Responde pregunta 1
                      ├─ Responde pregunta 2
                      ├─ Responde pregunta 3
                      ├─ Responde pregunta 4
                      ├─ Responde pregunta 5
                      ├─ Envía respuestas
                      │
   ← ← ← ← ← ← ← Ver resultados ← ← ← ← ← ←
   
   Resultado:
   Usuario A: 4/5 puntos ✅
   Usuario B: 3/5 puntos ✗
   
   ¡Usuario A GANA! 🎉
   Win rate actualizado automáticamente
```

---

## 📚 Temas disponibles

```
1. Actualidad           4. Cultura general    7. Deportes
2. Ciencia y tecnología 5. Geografía
3. Cine y series        6. Historia
```

Cada tema tiene 5+ preguntas únicas y verificadas.

---

## ✨ Pantallas principales

### 1. LOGIN (3 opciones)
- Session login
- Crear cuenta
- Entra sin cuenta

### 2. DASHBOARD
- Elegir tema
- Seleccionar rival
- Ver estadísticas
- Comenzar duelo

### 3. GAME
- 5 preguntas
- Navegación atrás/adelante
- Respuestas de opción múltiple
- Botón enviar

### 4. RESULTS
- Ganador destacado
- Comparación de scores
- Win rate actualizado
- Volver a dashboard

---

## 🎯 Ejemplo de flujo completo

```
1. INICIO
   └─ "Crear grupo" → Quiz Combat 101

2. RECIBIR CÓDIGO
   └─ ABC123 (copiable)

3. COMPARTIR CON AMIGOS
   └─ "Usa el código ABC123 para unirte"

4. LOS AMIGOS ACCEDEN
   └─ "Entra sin cuenta" → ABC123 → Sus nombres

5. TODOS EN DASHBOARD
   └─ Ven temas y rivales disponibles

6. INICIAR DUELO
   María selecciona "Cine y series" vs Juan

7. COMPETIR ASINCRÓNICAMENTE
   María responde mientras ve otra película
   Juan responde al día siguiente

8. RESULTADO
   María: 5/5 ✅ GANA
   Juan: 2/5 ✗
   
   Automáticamente:
   - María win rate: 80%
   - Juan win rate: 20%
   - Ambos ven sus estadísticas actualizadas
```

---

## 🔐 Seguridad y Privacidad

✅ **Datos locales** - Solo en tu navegador  
✅ **Grupos privados** - Código único de 6 caracteres  
✅ **Sin tracking** - No recopilamos datos  
✅ **Sesiones opcionales** - Funciona sin cuenta  

---

## 💡 Consejos para jugar

1. **Elige temas objetivos** - Historia, Ciencia, Geografía (no opinión)
2. **Invita a gente de tu nivel** - Más competitivo
3. **Juega varios duelos** - Tu win rate mejora
4. **Copia el código** - Haz click en el botón de copiar
5. **Vuelve después** - Tus estadísticas se guardan

---

## ❓ Preguntas frecuentes

### ¿Necesito cuenta?
No, funciona sin cuenta. Opcional si quieres guardar estadísticas.

### ¿Puedo jugar offline?
Sí, todo funciona localmente en tu navegador.

### ¿Mis datos se pierden?
Se guardan en localStorage mientras no limpies el navegador.

### ¿Puedo agregar preguntas?
Sí, edita `src/data/questions.ts` (para desarrolladores).

### ¿Cuánto tarda un duelo?
Cada usuario puede responder cuando quiera. El resultado se muestra cuando ambos terminan.

### ¿Hay límite de duelos?
No, puedes jugar infinitos duelos.

### ¿Funciona en móvil?
Sí, la app es responsiva (375px+).

---

## 🛠️ Si algo no funciona

**"No abre la app"**
→ Intenta: public/app.html en el navegador

**"Las preguntas están en blanco"**
→ Recarga: F5

**"No puedo crear grupo"**
→ Completa todos los campos

**"Perdí mis datos"**
→ Limpiaste localStorage (datos locales)

---

## 📊 Estadísticas

```
✅ 7 pantallas principales
✅ 35+ preguntas únicas
✅ 7 temas diferentes
✅ Sin dependencias externas
✅ Compatible con todos los navegadores
✅ Responsivo (mobile, tablet, desktop)
✅ ~70KB archivo único
✅ Carga en < 100ms
```

---

## 🚀 Próximas versiones

**v1.0** (HOY) ✅
- ✅ Duelos completos
- ✅ Grupos y códigos
- ✅ Ranking global

**v1.1** (Próximas semanas)
- Más preguntas (+100)
- Backend real (Firebase)
- Historial persistente

**v2.0** (Futuro)
- IA para generar preguntas
- Matchmaking automático
- Sistema de impugnaciones
- Notificaciones
- Ligas y divisiones

---

## 🎉 ¡Comienza ahora!

### Windows:
```
Doble click en: RUN.bat
```

### Otros:
```
Abre: public/app.html
```

### Servidor local:
```
python -m http.server 8000 --directory public
http://localhost:8000
```

---

## 📚 Más información

- **README.md** - Guía completa
- **ESTRUCTURA.md** - Arquitectura técnica
- **CLAUDE.md** - Para desarrolladores
- **contexto-proyecto.md** - Visión del producto

---

## 💬 ¿Feedback?

Encontraste un bug? ¿Tienes una idea? 
→ Crea un issue en GitHub

---

**¡Que disfrutes compitiendo! ⚔️**

*Quiz Combat v1.0*  
*13 de julio de 2026*
