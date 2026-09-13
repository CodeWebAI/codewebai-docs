const fs = require('fs');
const path = require('path');

// Intentar cargar variables desde .env si existe localmente
const envFilePath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envFilePath)) {
    const envContent = fs.readFileSync(envFilePath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
            const idx = trimmed.indexOf('=');
            const key = trimmed.slice(0, idx).trim();
            let val = trimmed.slice(idx + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            if (!process.env[key]) {
                process.env[key] = val;
            }
        }
    });
}

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('[AVISO] Variables SUPABASE_URL o SUPABASE_ANON_KEY no encontradas (crea un archivo .env local o configúralas en Vercel).');
}

const targetDir = path.join(__dirname, '..', 'docs', 'assets', 'javascripts');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const content = `// Generado automáticamente durante el build - No editar directamente
window.__SUPABASE_ENV__ = {
  url: "${supabaseUrl.trim()}",
  anonKey: "${supabaseAnonKey.trim()}"
};
`;

fs.writeFileSync(path.join(targetDir, 'supabase-env.js'), content, 'utf8');
console.log('✓ Configuración de Supabase inyectada en docs/assets/javascripts/supabase-env.js');
