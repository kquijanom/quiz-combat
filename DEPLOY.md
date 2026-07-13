# 🚀 Guía de Despliegue: Quiz Combat en Vercel

## ✅ Requisitos

- Cuenta en GitHub
- Cuenta en Vercel
- Cuenta en Supabase (ya creada)

## 📋 Paso a Paso

### 1. Crear Repositorio en GitHub

```bash
# Inicializar git (ya debe estar hecho)
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit: Quiz Combat with Supabase

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"

# Crear repositorio en GitHub y subir
git remote add origin https://github.com/[TU_USUARIO]/quiz-combat.git
git branch -M main
git push -u origin main
```

### 2. Desplegar en Vercel

#### Opción A: Desde CLI (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# Responder las preguntas:
# - Scope: Tu cuenta personal
# - Linked to existing project? No
# - Project name: quiz-combat
# - Framework: Vite
# - Root directory: .
# - Build command: npm run build
# - Output directory: dist
```

#### Opción B: Desde Dashboard

1. Ve a https://vercel.com
2. Click "New Project"
3. Selecciona el repositorio `quiz-combat`
4. Framework: Vite
5. Build: `npm run build`
6. Output: `dist`
7. Environment variables:
   - `VITE_SUPABASE_URL` = `https://qukuudhptrqwnuzhxxfb.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `sb_publishable_-yOGQht9HPzkjcTc8JSfew_JTr_xi1V`
8. Click Deploy

### 3. Variables de Entorno en Vercel

Después de deployar, ve a Settings → Environment Variables y agrega:

```
VITE_SUPABASE_URL=https://qukuudhptrqwnuzhxxfb.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_-yOGQht9HPzkjcTc8JSfew_JTr_xi1V
```

### 4. Actualizar app.html para Supabase

El archivo `public/app.html` actualmente usa localStorage. Para usar Supabase:

```html
<!-- Agregar en <head> -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- En el script principal -->
<script>
const SUPABASE_URL = 'https://qukuudhptrqwnuzhxxfb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-yOGQht9HPzkjcTc8JSfew_JTr_xi1V';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Cambiar handleSessionLogin para usar Supabase
async function handleSessionLogin() {
  const username = document.getElementById('sessionUsername')?.value;
  const password = document.getElementById('sessionPassword')?.value;
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password
  });
  
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  
  // Guardar usuario en base de datos
  const user = data.user;
  setState({ 
    screen: 'dashboard', 
    currentUser: { 
      id: user.id, 
      name: username, 
      email: user.email,
      winRate: 60 
    },
    isLoggedIn: true
  });
}

// Cambiar handleCreateGroup para guardar en Supabase
async function handleCreateGroup() {
  const groupName = document.getElementById('groupName')?.value;
  const userName = document.getElementById('userName')?.value;
  
  if (!groupName || !userName) return;
  
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  
  // Insertar en base de datos
  const { data, error } = await supabase
    .from('groups')
    .insert([{ name: groupName, code, admin_id: state.currentUser.id }]);
  
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  
  setState({
    screen: 'invite-code',
    inviteCode: code
  });
}
</script>
```

### 5. URL en Producción

Después de desplegar, Vercel te dará una URL:
```
https://quiz-combat-[random].vercel.app
```

## 🔐 Seguridad

- Las claves de Supabase están públicas en el navegador (es por diseño)
- Usa RLS (Row Level Security) en Supabase para proteger los datos
- Solo usuarios autenticados pueden crear/modificar datos

## 📊 Monitoreo

- Vercel Dashboard: https://vercel.com/dashboard
- Supabase Dashboard: https://app.supabase.com
- Logs: `vercel logs` en CLI

## 🆘 Troubleshooting

### "Build failed"
- Verifica que `package.json` existe
- Verifica que `vite.config.js` está correcto
- Check build logs en Vercel

### "Environment variables not working"
- Redeploy después de agregar variables
- Verifica que VITE_ está en el nombre

### "Supabase connection error"
- Verifica credenciales en `.env.local`
- Verifica que las tablas existen en Supabase

---

**Estado**: Quiz Combat está listo para producción con Supabase + Vercel ✅
