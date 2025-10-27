# Sistema de Cores - Clube Pizza

Sistema de cores completo baseado na paleta laranja/preto do design original.

## 🎨 Paleta Principal

### Cores Primárias (Laranja)
```
primary-50:  #fff7ed  (Laranja muito claro)
primary-100: #ffedd5  (Laranja claro)
primary-200: #fed7aa  (Laranja suave)
primary-300: #fdba74  (Laranja médio claro)
primary-400: #fb923c  (Laranja médio)
primary-500: #f97316  (Laranja principal - COR BASE)
primary-600: #ea580c  (Laranja escuro)
primary-700: #c2410c  (Laranja mais escuro)
primary-800: #9a3412  (Laranja muito escuro)
primary-900: #7c2d12  (Laranja quase marrom)
primary-950: #431407  (Laranja mais escuro possível)
```

### Cores Secundárias (Vermelho Pizza)
```
secondary-50:  #fef2f2  (Vermelho muito claro)
secondary-100: #fee2e2  (Vermelho claro)
secondary-200: #fecaca  (Vermelho suave)
secondary-300: #fca5a5  (Vermelho médio claro)
secondary-400: #f87171  (Vermelho médio)
secondary-500: #ef4444  (Vermelho principal)
secondary-600: #dc2626  (Vermelho escuro - da imagem)
secondary-700: #b91c1c  (Vermelho mais escuro)
secondary-800: #991b1b  (Vermelho muito escuro)
secondary-900: #7f1d1d  (Vermelho quase marrom)
secondary-950: #450a0a  (Vermelho mais escuro possível)
```

### Cores Neutras (Pretos, Cinzas e Brancos)
```
neutral-0:   #ffffff  (Branco puro)
neutral-50:  #fafafa  (Branco quase puro)
neutral-100: #f5f5f5  (Cinza muito claro)
neutral-200: #e5e5e5  (Cinza claro)
neutral-300: #d4d4d4  (Cinza médio claro)
neutral-400: #a3a3a3  (Cinza médio)
neutral-500: #737373  (Cinza)
neutral-600: #525252  (Cinza escuro)
neutral-700: #404040  (Cinza muito escuro)
neutral-800: #262626  (Quase preto)
neutral-900: #171717  (Preto suave)
neutral-950: #0a0a0a  (Preto intenso)
```

## 🎯 Cores Semânticas

### Estados do Sistema
```
success-light:   #bbf7d0  (Verde claro)
success-DEFAULT: #22c55e  (Verde principal)
success-dark:    #15803d  (Verde escuro)

warning-light:   #fde68a  (Amarelo claro)
warning-DEFAULT: #f59e0b  (Amarelo principal)
warning-dark:    #d97706  (Amarelo escuro)

error-light:     #fecaca  (Vermelho claro)
error-DEFAULT:   #ef4444  (Vermelho principal)
error-dark:      #dc2626  (Vermelho escuro)

info-light:      #bfdbfe  (Azul claro)
info-DEFAULT:    #3b82f6  (Azul principal)
info-dark:       #1d4ed8  (Azul escuro)
```

## 🏠 Cores de Background
```
background-primary:   #ffffff  (Fundo principal - branco)
background-secondary: #fafafa  (Fundo secundário - cinza muito claro)
background-tertiary:  #f5f5f5  (Fundo terciário - cinza claro)
background-dark:      #171717  (Fundo escuro)
background-darker:    #0a0a0a  (Fundo mais escuro)
```

## 📝 Cores de Texto
```
text-primary:   #171717  (Texto principal - preto suave)
text-secondary: #525252  (Texto secundário - cinza escuro)
text-tertiary:  #737373  (Texto terciário - cinza)
text-inverse:   #ffffff  (Texto inverso - branco)
text-muted:     #a3a3a3  (Texto esmaecido - cinza médio)
```

## 🔲 Cores de Borda
```
border-light:   #e5e5e5  (Borda clara)
border-DEFAULT: #d4d4d4  (Borda padrão)
border-dark:    #a3a3a3  (Borda escura)
border-accent:  #f97316  (Borda de destaque - laranja)
```

## 🌈 Gradientes Personalizados

### Gradientes Principais
```
bg-gradient-primary:      linear-gradient(135deg, #f97316 0%, #ea580c 100%)
bg-gradient-primary-soft: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)
bg-gradient-secondary:    linear-gradient(135deg, #ef4444 0%, #dc2626 100%)
```

### Gradientes de Fundo
```
bg-gradient-warm: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)
bg-gradient-dark: linear-gradient(135deg, #262626 0%, #171717 100%)
bg-gradient-hero: linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)
```

### Gradientes Especiais
```
bg-gradient-pizza:   linear-gradient(135deg, #f97316 0%, #ef4444 50%, #dc2626 100%)
bg-gradient-glow:    radial-gradient(circle at center, #f97316 0%, #ea580c 100%)
bg-gradient-overlay: linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(234, 88, 12, 0.9) 100%)
bg-gradient-fade:    linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)
```

## 🔳 Sombras Personalizadas

### Sombras de Elementos
```
shadow-soft:        Sombra suave para cards
shadow-medium:      Sombra média para destaque
shadow-hard:        Sombra forte para elevação
shadow-inner-soft:  Sombra interna suave
```

### Sombras Coloridas
```
shadow-primary:   Sombra com cor laranja
shadow-secondary: Sombra com cor vermelha
shadow-glow:      Efeito de brilho laranja
```

## 🎨 Como Usar

### Exemplos de Classes
```html
<!-- Botão principal -->
<button class="bg-gradient-primary text-text-inverse shadow-primary hover:shadow-glow">
  Fazer Pedido
</button>

<!-- Card com hover -->
<div class="bg-background-primary border border-border-light hover:border-primary-200 shadow-soft hover:shadow-medium">
  Conteúdo do card
</div>

<!-- Texto com gradiente -->
<h1 class="bg-gradient-primary bg-clip-text text-transparent">
  Clube Pizza
</h1>

<!-- Fundo hero -->
<section class="bg-gradient-hero">
  Seção principal
</section>
```

### Boas Práticas
1. **Use primary-500 como cor base** para elementos principais
2. **Combine neutral com primary** para criar contraste
3. **Use gradientes para CTAs** e elementos de destaque
4. **Mantenha consistência** usando as cores semânticas
5. **Teste acessibilidade** especialmente com textos sobre fundos coloridos

---
*Sistema criado baseado no design original do Clube Pizza*
