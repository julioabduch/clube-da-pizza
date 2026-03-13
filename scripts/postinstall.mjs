import { copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const src = join(__dirname, '..', 'node_modules', 'tinyexec', 'dist', 'main.mjs');
const dest = join(__dirname, '..', 'node_modules', 'tinyexec', 'dist', 'main.js');

try {
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log('✅ tinyexec fix applied successfully');
  } else {
    console.log('⚠️ tinyexec source file not found, skipping fix');
  }
} catch (error) {
  console.error('❌ Error applying tinyexec fix:', error.message);
  // Don't fail the build for this
  process.exit(0);
}
