# Quiz Combat - Guía de Desarrollo

## Descripción General

Quiz Combat es una plataforma de duelos de conocimiento asincrónicos para grupos cerrados. Permite que usuarios compitan 1v1 respondiendo preguntas de opción múltiple sobre temas objetivos sin necesidad de coincidencias en tiempo real.

## Características Implementadas (v1)

### 1. Sistema de Autenticación
- Login con usuario/contraseña
- Registro de nueva cuenta
- Acceso sin cuenta (grupos privados)
- Persistencia en localStorage

### 2. Gestión de Grupos
- Crear nuevo grupo con código único
- Unirse a grupo con código
- Lista de miembros del grupo
- Simulación de jugadores

### 3. Duelos
- Seleccionar tema (8 categorías)
- Elegir rival entre miembros
- Responder 5 preguntas de opción múltiple
- Interfaz progresiva (pregunta por pregunta)
- Cálculo automático de puntuación
- Comparación de resultados

### 4. Ranking Global
- Acceso sin grupo
- Lista de top 5 jugadores
- Visualización de puntos y win rate

### 5. Dashboard
- Estadísticas personales (win rate, duelos)
- Historial simulado de duelos previos
- Invitación para registrarse (usuarios sin cuenta)

## Arquitectura

### Stack
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla
- **Persistencia**: localStorage (sin backend)
- **Datos**: Hardcoded questions.ts + simulación

### Estructura de Archivos

```
public/app.html          # App principal (standalone)
├─ HTML                  # Estructura
├─ CSS                   # Estilos (variables CSS)
└─ JavaScript            # Lógica de estado + render

src/
├─ types.ts             # Interfaces TypeScript
├─ app.ts               # Lógica de la app (no usado en v1 standalone)
└─ data/
    └─ questions.ts     # Base de preguntas
```

## Flujos Principales

### Flujo de Autenticación
```
Login → Dashboard (isLoggedIn: true)
   o
Register → Dashboard (isLoggedIn: true)
   o
Crear Grupo → Invite Code → Dashboard (isLoggedIn: false)
   o
Unirse Grupo → Dashboard (isLoggedIn: false)
   o
Ranking Global → Ranking Screen → Dashboard/Login
```

### Flujo de Duelo
```
Dashboard
  ├─ Seleccionar Tema → Mostrar Rivales
  ├─ Seleccionar Rival → Enable "Comenzar duelo"
  └─ Comenzar Duelo → Game Screen

Game Screen
  ├─ Pregunta 1-4 → Botón "Siguiente"
  ├─ Pregunta 5 → Botón "Enviar"
  └─ Submit → Results Screen

Results Screen
  ├─ Mostrar ganador
  ├─ Comparar scores
  └─ Volver Dashboard
```

## Estado de la Aplicación

```javascript
state = {
  screen: 'login' | 'dashboard' | 'game' | 'results' | 'invite-code' | 'ranking',
  loginTab: 'session' | 'register' | 'group',
  currentUser: User | null,
  currentGroup: Group | null,
  inviteCode: string | null,
  selectedTopic: string | null,
  selectedRival: User | null,
  currentQuestionIndex: number,
  answers: (number | null)[],
  userScore: number,
  rivalScore: number,
  resultUserWon: boolean,
  isLoggedIn: boolean,
  currentQuestions: Question[],
  globalRanking: GlobalRankingPlayer[]
}
```

## Decisiones de Diseño

### ✅ Por qué HTML Standalone
- Cero dependencias externas
- Funciona sin build tools
- Fácil de compartir y ejecutar
- Prototipado rápido

### ✅ LocalStorage (sin backend)
- Persistencia local suficiente para MVP
- No requiere servidor
- Datos simulados para rivalidad
- Backend real puede agregarse luego

### ✅ Simulación de Rivales
- Scores aleatorios (0-5)
- Simula competencia realista
- Listo para integración de multiplayer real

### ✅ CSS Variables
- Temas fáciles de cambiar
- Consistencia visual
- Escalable

## Cómo Agregar Funcionalidades

### Agregar nuevas preguntas
```javascript
// En app.html, dentro de questionsData[]
{
  id: 'unique-id',
  topic: 'Nombre Tema Existente o Nuevo',
  text: '¿Pregunta?',
  options: ['Op A', 'Op B', 'Op C', 'Op D'],
  correctAnswerIndex: 0,  // 0-3
  justification: 'Por qué es correcta'
}
```

### Agregar nuevo tema
1. Agregar preguntas con `topic: 'Nuevo Tema'`
2. Aparecerá automáticamente en topicsList

### Cambiar colores
1. Editar variables CSS en `:root` (app.html)
2. `--orange-500`, `--navy-900`, etc.

## Limitaciones Actuales (v1)

- ❌ No hay persistencia multiusuario (solo localStorage local)
- ❌ Rivales simulados (scores aleatorios)
- ❌ Sin impugnaciones de preguntas
- ❌ Sin historial persistente entre sesiones
- ❌ Sin notificaciones
- ❌ Sin IA para generar preguntas

## Migración a Backend (v2)

### Pasos recomendados:
1. **Firebase/Supabase** para datos en tiempo real
2. **API REST** para CRUD de duelos
3. **WebSockets** para notificaciones
4. **OpenAI API** para generación de preguntas
5. **Sistema de impugnaciones** con admin panel

### Cambios mínimos necesarios:
1. Reemplazar `setState()` con llamadas API
2. Agregar autenticación real (Firebase Auth)
3. Implementar multiplayer real
4. Agregar persistencia de historial

## Testing

### Pruebas manuales (flujos principales):
- [ ] Login/Register/Create Group
- [ ] Crear duelo completo (5 preguntas)
- [ ] Ver resultados correctos
- [ ] Actualización de win rate
- [ ] Navegación entre pantallas
- [ ] Responsive en mobile

### Pruebas de edge cases:
- [ ] Seleccionar rival sin tema
- [ ] Volver durante duelo
- [ ] Responder algunas preguntas (no todas)
- [ ] Mismo usuario como rival (si aplica)

## Performance

- ⚡ Carga instantánea (archivo único)
- ⚡ Transiciones CSS (no JavaScript pesado)
- ⚡ Sin dependencias externas
- ⚡ LocalStorage para persistencia rápida

## Accesibilidad

- ✅ Colores de alto contraste
- ✅ Botones con tamaño adecuado
- ✅ Tipografía legible
- ❌ Sin aria labels (mejorable)
- ❌ Sin keyboard navigation (mejorable)

## Próximos Pasos Sugeridos

1. **Backend real** (Firebase)
2. **Generación de preguntas con IA**
3. **Sistema de impugnaciones**
4. **Historial y progreso** (persistente)
5. **Notificaciones push**
6. **Matchmaking inteligente**
7. **Ligas/Divisiones**
8. **Sistema ELO**

---

Última actualización: 13 de julio de 2026
