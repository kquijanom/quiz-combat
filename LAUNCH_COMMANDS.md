# 🚀 Comandos Exactos para Lanzar Quiz Combat

## 1️⃣ Crear Repositorio en GitHub

### En GitHub.com:
1. Ve a https://github.com/new
2. Nombre: `quiz-combat`
3. Descripción: `Plataforma de duelos de conocimiento`
4. Público
5. Click "Create repository"

### En Terminal:
```bash
cd C:\Users\USUARIO\Downloads\Proyecto\ Final

git remote add origin https://github.com/[TU_USUARIO]/quiz-combat.git
git branch -M main
git push -u origin main
```

**Resultado**: Tu repo estará en `https://github.com/[TU_USUARIO]/quiz-combat`

---

## 2️⃣ Desplegar en Vercel

### Opción A: CLI (Recomendado - 2 minutos)

```bash
# Instalar Vercel CLI (primera vez)
npm install -g vercel

# Desplegar
cd C:\Users\USUARIO\Downloads\Proyecto\ Final
vercel

# Responder las preguntas:
# Set up and deploy? > Yes
# Which scope? > [Tu cuenta]
# Link to existing project? > No
# Project name? > quiz-combat
# Framework? > Vite
# Root directory? > .
# Build command? > npm run build
# Output directory? > dist
# Auto-confirm deployment? > Yes
```

**Resultado**: URL como `https://quiz-combat-abc123.vercel.app`

### Opción B: Dashboard Web (3 minutos)

1. Ve a https://vercel.com/login
2. Click "New Project"
3. Conecta GitHub (si no lo hiciste)
4. Selecciona `quiz-combat`
5. Framework: **Vite**
6. Build: **npm run build**
7. Output: **dist**
8. Click "Deploy"

**Resultado**: Same URL

---

## 3️⃣ Configurar Variab les de Entorno en Vercel

Después de desplegar, ve a:

**https://vercel.com/dashboard → Projects → quiz-combat → Settings → Environment Variables**

Agregar:

```
VITE_SUPABASE_URL = https://qukuudhptrqwnuzhxxfb.supabase.co
VITE_SUPABASE_ANON_KEY = sb_publishable_-yOGQht9HPzkjcTc8JSfew_JTr_xi1V
```

Luego:
1. Click "Save"
2. Ve a "Deployments"
3. Click el último deploy
4. Click "Redeploy"

**Resultado**: App con Supabase integrado ✅

---

## 4️⃣ Prueba en Producción

1. Abre: `https://quiz-combat-abc123.vercel.app`
2. Login / Crear grupo
3. Seleccionar tema
4. Jugar duelo
5. Ver resultados

**Todo debe funcionar igual que en local** ✅

---

## 5️⃣ (Opcional) Dominio Personalizado

En Vercel Dashboard:

```
Settings → Domains → Add

Nombre: quiz-combat.com (costo ~$12/año)
o usar subdominio gratis de Vercel
```

---

## ⚡ TL;DR (Versión Rápida)

```bash
# 1. Push a GitHub
git remote add origin https://github.com/[TU]/quiz-combat.git
git branch -M main
git push -u origin main

# 2. Instalar y desplegar
npm install -g vercel
vercel

# 3. Agregar env vars en https://vercel.com/dashboard
# VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY

# 4. Redeploy y ¡listo!
```

---

## ✅ Checklist Final

- [ ] Repositorio en GitHub
- [ ] Primer push exitoso
- [ ] Vercel CLI instalado
- [ ] Despliegue completado
- [ ] Variables de entorno agregadas
- [ ] Redeployed con variables
- [ ] Prueba en producción exitosa
- [ ] URL compartida con usuarios

---

## 🎉 Después de estos pasos:

Tu app estará en producción:
- URL: `https://quiz-combat-[random].vercel.app`
- BD: Supabase
- Hosting: Vercel (gratis)
- SSL: Incluido
- Usuarios ilimitados en Free Tier

**¡Quiz Combat está vivo en la web!** 🚀
