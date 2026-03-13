# Instruções do Projeto - Clube Pizza

## 🎯 Visão Geral
Este é um projeto de **assinatura de pizzas** desenvolvido com **Nuxt 4 + TypeScript + Tailwind CSS**. O objetivo é criar uma experiência completa de assinatura semanal de pizzas com interface moderna e responsiva.

---

## 📱 **PRIORIDADE ABSOLUTA: Mobile First**
- **SEMPRE** desenvolver pensando em mobile primeiro
- **SEMPRE** deixar todas as páginas responsivas para celular, tablet e desktop
- Usar breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Touch targets mínimos de 44px para elementos interativos
- Testar em diferentes tamanhos de tela

---

## 🎨 **Design System & UI**

### Ícones
- **OBRIGATÓRIO**: Usar apenas **Heroicons** via `useIcon.ts`
- **NUNCA** usar ícones que não estejam no mapa do `useIcon.ts`
- **SEMPRE** verificar se o ícone existe antes de usar
- Ícones disponíveis: `eye`, `eye-slash`, `user`, `envelope`, `key`, `arrow-right`, etc.
- Para novos ícones, adicionar primeiro no `useIcon.ts`

### Componentes Base
- **BaseButton**: Usar variantes `primary`, `secondary`, `outline`, `ghost`, `danger`
- **BaseInput**: Para campos de texto, email, etc.
- **InputPassword**: Para senhas com toggle de visibilidade
- **BaseIcon**: Para todos os ícones (conectado ao useIcon)

### Cores e Gradientes
- **Primário**: `bg-gradient-primary` para botões principais
- **Secundário**: `bg-gradient-secondary` 
- **Texto**: `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
- **Fundos**: `bg-background-primary`, `bg-gradient-warm`
- **Estados**: `text-error-DEFAULT`, `text-success-600`, etc.

---

## 🏗️ **Arquitetura & Estrutura**

### Organização de Pastas
```
app/
├── components/     # Componentes reutilizáveis (PascalCase)
├── composables/    # Lógica reativa (useX.ts)
├── pages/          # Rotas (minúsculas)
├── layouts/        # Layouts de página
└── assets/         # CSS, fontes, etc.

shared/
├── types/          # Tipos TypeScript globais
└── constants/      # Constantes e enums
```

### Nomenclatura
- **Componentes**: `PascalCase.vue` (ex: `LoginForm.vue`)
- **Páginas**: `minusculas.vue` (ex: `login.vue`, `dashboard.vue`)
- **Composables**: `useX.ts` (ex: `useIcon.ts`, `useNotification.ts`)
- **Tipos**: `PascalCase.ts` (ex: `UserDTO.ts`)

---

## 🔧 **Padrões de Código**

### TypeScript
- **SEMPRE** usar TypeScript (lang="ts" nos componentes)
- **SEMPRE** tipar props, emits, e estados
- **EVITAR** `any` - usar tipagem explícita
- Interfaces claras para dados de formulário e APIs

### Vue 3 + Composition API
- **Usar** Composition API com `<script setup>`
- **Organizar** código: imports → types → reactive states → computed → methods → lifecycle
- **Expor** funções quando necessário com `defineExpose`

### Formulários
- **Validação** em tempo real (onBlur)
- **Estados visuais** claros (loading, error, success)
- **Acessibilidade** com labels e IDs únicos
- **UX** intuitiva com feedback imediato

---

## 📄 **Páginas Principais**

### Fluxo do Usuário
1. **Homepage** (`/`) - Apresentação e demo
2. **Planos** (`/planos`) - Seleção de assinatura  
3. **Login** (`/login`) - Autenticação
4. **Dashboard** (`/dashboard`) - Portal do usuário logado
5. **Escolher Sabores** (`/escolher-sabores`) - Pedido semanal
6. **Confirmação** (`/confirm`) - Callback de autenticação

### Padrões de Página
- **SEO**: useHead() em todas as páginas
- **Loading states**: Para ações assíncronas
- **Error handling**: Mensagens claras para o usuário
- **Navigation**: Fluxo lógico entre páginas

---

## 🔐 **Autenticação (Futuro)**

### Supabase Integration
- Módulo `@nuxtjs/supabase` preparado (comentado)
- Página `/confirm` para callback
- Composables: `useSupabaseUser()`, `useSupabaseClient()`
- Redirecionamento baseado em autenticação

---

## 🍕 **Business Logic**

### Planos de Assinatura
- **Clássico**: R$ 79,90 - Sabores tradicionais
- **Premium**: R$ 119,90 - Sabores especiais + clássicos
- Frequência: 1 pizza gigante por semana
- Limite: até 2 sabores por pizza

### Estados do Sistema
- **Pedido semanal**: Disponível/Já pedido/Aguarde próxima semana
- **Sabores**: Arrays separados por plano
- **Validações**: Email, senha, observações, etc.

---

## ⚡ **Performance & UX**

### Otimizações
- **Lazy loading** de componentes quando apropriado
- **Debounce** em validações
- **Loading states** para feedback visual
- **Error boundaries** para tratamento de erros

### Responsividade
- **Mobile-first** approach obrigatório
- **Touch-friendly** elementos (min 44px)
- **Safe areas** para iOS
- **Viewport** configurado corretamente

---

## 🧪 **Testing & Debug**

### Página Debug
- `/debug` para informações do sistema
- Teste de responsividade
- Informações do dispositivo
- Estados do aplicativo

---

## 📝 **Convenções de Commit**

- `feat:` nova funcionalidade
- `fix:` correção de bug  
- `style:` mudanças de estilo/UI
- `refactor:` refatoração de código
- `docs:` documentação

---

## 🚀 **Deploy & Produção**

### Preparação
- Verificar todos os TODOs de produção
- Ativar autenticação Supabase
- Configurar variáveis de ambiente
- Testar fluxo completo

---

## ⚠️ **Lembretes Importantes**

1. **MOBILE FIRST** - sempre!
2. **Heroicons only** - nunca usar ícones inexistentes
3. **TypeScript** - sempre tipar tudo
4. **Responsividade** - testar em todos os tamanhos
5. **UX** - feedback visual claro para o usuário
6. **Componentes** - reutilizar sempre que possível
7. **Validações** - em tempo real e claras
8. **SEO** - meta tags em todas as páginas

---

*Este documento deve ser atualizado conforme o projeto evolui.*
