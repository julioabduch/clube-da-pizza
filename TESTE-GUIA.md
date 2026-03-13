# 🔧 GUIA DE TESTE - Clube Pizza

## Problema Identificado
Você está acessando `/planos` sem estar autenticado, mesmo após ter feito login antes.
O localStorage pode ter uma sessão expirada.

## ✅ Solução: Teste Passo a Passo

### 1️⃣ Limpar Sessão Antiga

Abra o Console do Browser (F12) e execute:

```javascript
// Limpa TUDO relacionado ao Supabase
localStorage.clear()
sessionStorage.clear()
console.log('✅ Sessão limpa!')
```

Depois, **recarregue a página** (F5 ou Cmd+R)

---

### 2️⃣ Fazer Login Novamente

1. Acesse: **http://localhost:3000/login**
2. Faça login com suas credenciais
3. Você deve ser redirecionado para `/dashboard`
4. No console, deve aparecer: `✅ Usuário autenticado: seu@email.com`

---

### 3️⃣ Testar Assinatura

1. No dashboard, clique em **"Ver Planos"** ou acesse `/planos`
2. Agora deve aparecer: **"✅ Logado como: seu@email.com"**
3. Clique em **"Assinar Plano Clássico"** ou **"Assinar Plano Premium"**
4. Deve funcionar sem erro de RLS! 🎉

---

### 4️⃣ Verificar no Supabase

1. Acesse: https://fewqyxbjotivtfsyqort.supabase.co
2. Vá em **Table Editor** → **pag_usuarios**
3. Você deve ver seu registro criado com:
   - ✅ `email`: seu email
   - ✅ `user_id`: UUID do usuário
   - ✅ `subscription_id`: sub_sim_classico_... ou sub_sim_premium_...
   - ✅ `ordens_limite`: 4 (clássico) ou 8 (premium)

---

### 5️⃣ Testar Criação de Pedido

1. No dashboard, clique em **"Fazer Novo Pedido"**
2. Escolha até 2 sabores
3. Clique em **"Criar Pedido"**
4. Verifique em **Table Editor** → **pag_ordens**
5. Deve aparecer seu pedido! 🍕

---

## 🐛 Se ainda der erro

### Verificar no Console:

```javascript
// Verificar se tem usuário autenticado
const user = useSupabaseUser()
console.log('User:', user.value)

// Se retornar null, a sessão não está ativa
```

### Possíveis causas:

1. **RLS não foi configurado** → Execute o SQL de `supabase-rls-policies.sql`
2. **Sessão expirou** → Limpe localStorage e faça login novamente
3. **Cookie não está sendo salvo** → Verifique se `cookieOptions: { secure: false }` está no nuxt.config.ts

---

## 📋 Checklist Completo

- [ ] Executei o SQL de RLS no Supabase
- [ ] Limpei localStorage/sessionStorage
- [ ] Recarreguei a página
- [ ] Fiz login novamente
- [ ] Vejo "✅ Logado como: ..." na página de planos
- [ ] Consegui assinar um plano sem erro
- [ ] Vejo o registro em pag_usuarios no Supabase
- [ ] Consegui criar um pedido
- [ ] Vejo o pedido em pag_ordens no Supabase

---

## 🎯 Se tudo funcionar

Você terá um sistema completo de:
- ✅ Autenticação com Supabase
- ✅ Assinatura de planos (simulada)
- ✅ Criação de pedidos com limite
- ✅ Dashboard com status em tempo real
- ✅ Proteção RLS garantindo segurança dos dados

🍕 **Clube Pizza está funcionando!**
