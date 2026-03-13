# 🔧 COMO EXECUTAR SQL NO SUPABASE - PASSO A PASSO

## ⚠️ VOCÊ ESTÁ VENDO ESTE ERRO:
```
"new row violates row-level security policy for table "pag_usuarios""
```

## ✅ SOLUÇÃO: Executar SQL no Supabase

---

## 📋 OPÇÃO 1: Desabilitar RLS (TESTE RÁPIDO)

### Passo a Passo:

1. **Abra o Supabase Dashboard**
   - URL: https://fewqyxbjotivtfsyqort.supabase.co
   - Faça login se necessário

2. **Clique em "SQL Editor"** (ícone de raio ⚡ no menu lateral esquerdo)

3. **Clique em "+ New query"** (botão verde no canto superior direito)

4. **Cole este código:**
   ```sql
   ALTER TABLE public.pag_usuarios DISABLE ROW LEVEL SECURITY;
   ALTER TABLE public.pag_ordens DISABLE ROW LEVEL SECURITY;
   ```

5. **Clique em "RUN"** (botão verde) ou pressione Cmd+Enter / Ctrl+Enter

6. **Aguarde a confirmação:** Deve aparecer "Success. No rows returned"

7. **TESTE AGORA:** Volte para http://localhost:3000/planos e clique em "Assinar"

---

## 📋 OPÇÃO 2: Ativar RLS com Políticas (RECOMENDADO)

Se você quer **segurança adequada**, execute o SQL do arquivo `supabase-rls-policies.sql`:

### Passo a Passo:

1. **Abra o arquivo:** `supabase-rls-policies.sql` (na raiz do projeto)

2. **Copie TUDO** (Cmd+A ou Ctrl+A, depois Cmd+C ou Ctrl+C)

3. **No Supabase Dashboard:**
   - Clique em "SQL Editor"
   - Clique em "+ New query"
   - Cole o código copiado
   - Clique em "RUN"

4. **Aguarde a execução:** Pode demorar alguns segundos

5. **TESTE NOVAMENTE:** Volte para http://localhost:3000/planos e clique em "Assinar"

---

## 🎯 O QUE ESPERAR DEPOIS:

### ✅ Se funcionar:
- O botão "Assinar" vai criar o registro no banco
- Você será redirecionado para `/dashboard`
- Verá o status da assinatura ativa
- Poderá criar pedidos

### ❌ Se ainda der erro:
- Volte aqui e me avise qual erro apareceu
- Provavelmente precisaremos ajustar as políticas

---

## 🔍 VERIFICAR SE AS POLÍTICAS FORAM CRIADAS:

Execute este SQL no Supabase para verificar:

```sql
SELECT schemaname, tablename, policyname, permissive, roles, cmd 
FROM pg_policies 
WHERE schemaname = 'public' 
  AND tablename IN ('pag_usuarios', 'pag_ordens');
```

Deve retornar **8 políticas** (4 para cada tabela: SELECT, INSERT, UPDATE, DELETE)

---

## 💡 DICA:

Se você só quer **testar rápido**, use a **OPÇÃO 1** (desabilitar RLS).
Depois, quando tudo estiver funcionando, volte e execute a **OPÇÃO 2** para adicionar segurança.

---

## 🆘 PRECISA DE AJUDA?

Me mande:
1. Screenshot do erro que apareceu
2. Qual opção você executou (1 ou 2)
3. Se apareceu "Success" no SQL Editor

---

**IMPORTANTE:** Você está logado como `test@test.com` ✅  
O problema agora é **APENAS** a falta das políticas RLS no banco de dados.
