const fs = require('fs');
const path = require('path');

// Crear directorio dist si no existe
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Copiar index.html sin modificaciones
const sourceFile = path.join(__dirname, '../public/index.html');
const destFile = path.join(__dirname, '../dist/index.html');

const content = fs.readFileSync(sourceFile, 'utf-8');
fs.writeFileSync(destFile, content, 'utf-8');

console.log('✓ index.html copied to dist/');
