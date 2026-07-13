# Quiz Combat - Plataforma de Duelos de Conocimiento

Una plataforma interactiva de duelos asincrónicos 1v1 sobre temas objetivos para grupos cerrados (cursos, amigos).

## 🚀 Inicio rápido

### Opción 1: Abrir directamente en el navegador
```bash
# Navega a la carpeta del proyecto y abre el archivo:
public/app.html
```

### Opción 2: Servir con Python (recomendado)
```bash
python server.py
```

Luego abre: `http://localhost:8000/app.html`

## ✨ Funcionalidades principales

### v1 Implementada
- ✅ **Autenticación**: Login/registro de sesión + unirse por código
- ✅ **Crear/unirse a grupos**: Código de invitación único
- ✅ **Dashboard**: Ver temas disponibles, elegir rival
- ✅ **Duelos asincrónicos**: Responder 5 preguntas por duelo
- ✅ **Resultados**: Mostrar ganador y puntuaciones
- ✅ **Ranking Global**: Ver top players globales

### v2 (Futuro)
- Reportar preguntas como ambiguas
- Historial y progreso individual por tema
- Resultados preliminares post-envío (anti-sandbagging)
- Matchmaking automático por nivel/racha
- Notificaciones push

## 📖 Cómo usar

### Para Administradores
1. Abre la app y selecciona **"Crear grupo"** en la pestaña de acceso
2. Ingresa nombre del grupo y tu nombre
3. Recibe un código de invitación único (6 caracteres)
4. Comparte el código con los miembros

### Para Miembros
1. Usa la pestaña **"Entra sin cuenta"** o **"Crear cuenta"**
2. Ingresa el código recibido y tu nombre
3. Elige un tema
4. Selecciona un rival
5. Responde las 5 preguntas
6. Ve el resultado inmediatamente

### Ranking Global
- Acceso sin grupo: **"Jugar en Ranking Global 🏆"**
- Compite anónimamente con otros jugadores
- Gana puntos y sube en el ranking

## 🎮 Temas disponibles

- Actualidad
- Ciencia y tecnología
- Cine y series
- Cultura general
- Geografía
- Historia
- Deportes

## 🛠️ Estructura del proyecto

```
Proyecto Final/
├── public/
│   ├── app.html           # App completa (HTML + CSS + JS)
│   ├── index.html         # Landing page
│   └── styles.css         # Estilos globales
├── src/
│   ├── types.ts          # Interfaces TypeScript
│   ├── app.ts            # Lógica principal
│   └── data/
│       └── questions.ts  # Base de preguntas
├── server.py             # Servidor local Python
├── README.md             # Este archivo
└── contexto-proyecto.md  # Spec del producto
```

## 🔐 Autenticación

- **Sin servidor real**: Usa localStorage del navegador
- **Sesiones**: Se guardan automáticamente
- **Grupos**: Código de 6 caracteres aleatorio

## 📊 Base de datos

Las preguntas están organizadas por tema. Cada duelo:
- Selecciona 5 preguntas del tema elegido
- Calcula score automáticamente
- Simula respuestas del rival (aleatorio 0-5)

## 🎯 Flujo de un duelo

1. Usuario selecciona tema y rival
2. Sistema genera duelo con 5 preguntas
3. Usuario responde todas las preguntas
4. Sistema calcula puntuación
5. Se muestra resultado final
6. Win rate se actualiza automáticamente

## 📱 Responsive

- ✅ Desktop (1280px+)
- ✅ Tablet (768px+)
- ✅ Mobile (375px+)

## 🎨 Diseño

Basado en el sistema de diseño **Letters for Learners**:
- Paleta: Naranja (#FF6B35) + Azul marino (#1a1a2e)
- Tipografía: Segoe UI / System fonts
- Animaciones: Transiciones suaves y bounce effects

## 🚀 Próximas mejoras

1. **Backend real**: Firebase/Supabase para persistencia
2. **Generación de preguntas con IA**: OpenAI API
3. **Historial detallado**: Progreso por tema y rival
4. **Matchmaking inteligente**: Nivel/racha
5. **Sistema de impugnaciones**: Resolver preguntas ambiguas
6. **Notificaciones**: Push y email para duelos pendientes

## 📝 Notas de desarrollo

- No requiere build tools
- HTML + CSS + JavaScript vanilla (compatible con todos los navegadores)
- LocalStorage para persistencia local
- Lógica de cálculo de scores completamente funcional
- Simulación de rivales con scores aleatorios

## 🤝 Contribuir

Para agregar más preguntas:
1. Edita `src/data/questions.ts`
2. Sigue el formato existente
3. Asegúrate de que sean preguntas objetivas
4. Incluye justificación para cada respuesta

## 📄 Licencia

Proyecto educativo - Libre para uso personal

---

¿Dudas? Revisa `contexto-proyecto.md` para más detalles sobre la visión del producto.
