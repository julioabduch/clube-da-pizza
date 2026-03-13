# 🍕 Clube Pizza - Aplicação Web

Aplicação web responsiva para delivery de pizzas com sistema de assinatura, desenvolvida com **Nuxt 4**, **TypeScript** e **Tailwind CSS**.

## ✨ Características

- **🎨 Design Responsivo**: Otimizado para dispositivos móveis, tablets e desktops
- **⚡ SPA (Single Page Application)**: Navegação rápida e fluida
- **🧩 Sistema de Componentes**: BaseButton, BaseInput e BaseIcon reutilizáveis
- **🎯 Headless UI**: Modais e componentes acessíveis
- **🍕 Páginas de Planos**: Sistema completo de assinatura com dois tiers
- **📱 Mobile-First**: Design otimizado para celulares

## 🏗️ Tecnologias

- **Nuxt 4.2.0** - Framework Vue.js com TypeScript
- **Vue 3.5.22** - Framework reativo
- **Tailwind CSS** - Framework de styling
- **Headless UI** - Componentes acessíveis
- **Hero Icons** - Biblioteca de ícones

## 📱 Responsividade

### Otimizações Mobile
- **Viewport otimizado**: Meta tags para dispositivos móveis
- **Touch targets**: Botões com tamanho mínimo de 44px
- **Tipografia responsiva**: Tamanhos de texto adaptativos
- **Grid responsivo**: Layouts que se adaptam a diferentes telas
- **Safe areas**: Suporte para entalhes e bordas arredondadas

### Breakpoints
- **sm**: 640px+ (Smartphones grandes)
- **md**: 768px+ (Tablets)
- **lg**: 1024px+ (Laptops)
- **xl**: 1280px+ (Desktops)

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm, pnpm, yarn ou bun

### Instalação
```bash
# Clone o repositório
git clone https://github.com/julioabduch/clube-da-pizza.git

# Entre no diretório
cd clube-da-pizza

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse: http://localhost:3000
```

### Produção
```bash
# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📄 Páginas

### 🏠 Home (`/`)
- Hero section responsivo
- Navegação mobile-friendly
- Links para cardápio e planos

### 📋 Planos (`/planos`)
- **Plano Clássico**: R$ 79,90/mês
- **Plano Premium**: R$ 119,90/mês
- Cards responsivos com benefícios
- Seção de vantagens compartilhadas

### 🧪 Teste (`/teste`)
- Demonstração dos componentes base
- Formulários responsivos
- Debug de valores

### 🔧 Debug (`/debug`)
- Informações do dispositivo
- Detecção de dimensões da tela
- Diagnóstico de responsividade

## 🧩 Componentes

### BaseButton
- **Variantes**: primary, secondary, outline, ghost, danger
- **Tamanhos**: sm, md, lg
- **Estados**: normal, disabled
- **Suporte a ícones**: Hero Icons integrado

### BaseInput
- **Tipos**: text, email, password, tel, number, search
- **Estados**: normal, error, disabled
- **Validação**: erro e mensagens de ajuda
- **Ícones**: suporte a ícones à esquerda

### BaseIcon
- **Biblioteca**: Hero Icons
- **Tamanhos**: xs, sm, md, lg, xl
- **Cores**: sistema de cores do design system

## 🎨 Design System

### Cores Principais
- **Primary**: Laranja (#ea580c)
- **Secondary**: Complementares
- **Success**: Verde para feedback positivo
- **Warning**: Amarelo para avisos
- **Error**: Vermelho para erros
- **Info**: Azul para informações

### Gradientes
- **gradient-primary**: Gradiente laranja
- **gradient-warm**: Fundo aquecido
- **gradient-hero**: Hero sections

## 📱 Otimizações Mobile

### CSS Customizado
```css
/* Prevenir zoom em inputs iOS */
input { font-size: 16px; }

/* Touch targets mínimos */
button, input { min-height: 44px; }

/* Safe areas para notch */
.safe-area-inset { padding: env(safe-area-inset-*); }
```

### Meta Tags
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#ea580c">
<meta name="apple-mobile-web-app-capable" content="yes">
```

## 🔧 Configuração

### Nuxt Config
- **SPA Mode**: Aplicação de página única
- **CSS**: Tailwind CSS integrado
- **Meta tags**: Viewport e PWA otimizados
- **Supabase**: Preparado (atualmente desabilitado)

## 🐛 Debug e Testes

- **Página de Teste**: `/teste` - Componentes e formulários
- **Debug**: `/debug` - Informações do dispositivo
- **Console**: Logs detalhados de eventos

## 📞 Suporte

Para suporte ou dúvidas sobre responsividade:
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor do navegador
- Verifique a página `/debug` para informações do dispositivo

---

**Desenvolvido com ❤️ para oferecer a melhor experiência em pizzas! 🍕**
