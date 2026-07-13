import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
