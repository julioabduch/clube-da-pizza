# 🚀 Deployment no Vercel

## ⚙️ Configuração de Variáveis de Ambiente

No dashboard do Vercel, adicione as seguintes variáveis:

### 1. Settings → Environment Variables

```bash
SUPABASE_URL=https://fewqyxbjotivtfsyqort.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZld3F5eGJqb3RpdnRmc3lxb3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDY3MzQsImV4cCI6MjA2Mjg4MjczNH0.oGIcU3n4IjYWWrDw6lDZtqUFZMdFHWwfhHGc6Iz8oe4
```

### 2. Build Settings

- **Framework Preset:** Nuxt.js
- **Build Command:** `npm run build` (já configurado)
- **Output Directory:** `.output/public` (já configurado)
- **Install Command:** `npm install && npm run postinstall` (já configurado)
- **Node Version:** 24.6.0 (definido no `.nvmrc`)

## 📦 Arquivos de Configuração

- ✅ `vercel.json` - Configuração de build
- ✅ `.nvmrc` - Versão do Node.js
- ✅ `package.json` - Script postinstall para fix do tinyexec

## 🔍 Troubleshooting

### Build falha com erro do tinyexec

O projeto tem um fix automático no `postinstall` que copia `main.mjs` para `main.js`.

Se ainda assim falhar:
1. Verifique se o postinstall foi executado nos logs
2. Procure por: `✅ tinyexec fix applied`
3. Se não aparecer, o Node.js pode não estar conseguindo executar o script

### Variáveis de ambiente não funcionam

Certifique-se de que as variáveis foram adicionadas para **todos os ambientes**:
- Production
- Preview
- Development

E que foram **salvas** (botão "Save" no Vercel).

## 📝 Logs Úteis

No dashboard do Vercel → Deployment → Build Logs, procure por:

```
✅ tinyexec fix applied
Installing dependencies...
Running "npm run build"
✔ Nuxt Nitro server built
```

Se o build passar, o deployment está funcionando! 🎉
