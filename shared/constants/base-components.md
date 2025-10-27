# Componentes Base - Clube Pizza

Componentes base reutilizáveis criados seguindo padrões do Vue e integrados ao sistema de cores.

## 📁 Estrutura

```
app/components/
├── BaseButton.vue     # Componente de botão
├── BaseInput.vue      # Componente de input
└── BaseIcon.vue       # Componente de ícone
```

## 🔘 BaseButton.vue

Componente de botão com múltiplas variantes e tamanhos.

### Props
```typescript
interface Props {
  type?: 'button' | 'submit' | 'reset'     // Tipo do botão
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' // Variante visual
  size?: 'sm' | 'md' | 'lg'                // Tamanho
  disabled?: boolean                        // Estado desabilitado
  class?: string                           // Classes customizadas
}
```

### Eventos
```typescript
interface Emits {
  (e: 'click', event: MouseEvent): void    // Evento de clique
}
```

### Exemplo de Uso
```vue
<template>
  <!-- Botão primário básico -->
  <BaseButton @click="handleClick">
    Clique Aqui
  </BaseButton>

  <!-- Botão com variantes -->
  <BaseButton variant="primary" size="lg">
    Botão Principal
  </BaseButton>
  
  <BaseButton variant="outline" size="sm">
    Botão Outline
  </BaseButton>
  
  <BaseButton variant="danger" :disabled="true">
    Botão Desabilitado
  </BaseButton>

  <!-- Botão de envio -->
  <BaseButton type="submit" variant="primary">
    Enviar Formulário
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from '~/components/BaseButton.vue'

const handleClick = (event: MouseEvent) => {
  console.log('Botão clicado!', event)
}
</script>
```

### Variantes Disponíveis
- **primary**: Gradiente laranja (principal)
- **secondary**: Gradiente vermelho (secundário)
- **outline**: Borda laranja, fundo transparente
- **ghost**: Apenas texto, hover com fundo
- **danger**: Vermelho para ações destrutivas

---

## 📝 BaseInput.vue

Componente de input com label, ícones, validação e estados.

### Props
```typescript
interface Props {
  modelValue?: string | number              // Valor do input (v-model)
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' // Tipo
  label?: string                           // Label do campo
  placeholder?: string                     // Placeholder
  icon?: string                           // Ícone do input
  error?: string                          // Mensagem de erro
  helpText?: string                       // Texto de ajuda
  disabled?: boolean                      // Estado desabilitado
  required?: boolean                      // Campo obrigatório
  size?: 'sm' | 'md' | 'lg'              // Tamanho
  class?: string                          // Classes customizadas
}
```

### Eventos
```typescript
interface Emits {
  (e: 'update:modelValue', value: string | number): void // v-model
  (e: 'blur', event: FocusEvent): void                   // Perda de foco
  (e: 'focus', event: FocusEvent): void                  // Ganho de foco
  (e: 'input', event: Event): void                       // Digitação
}
```

### Exemplo de Uso
```vue
<template>
  <!-- Input básico -->
  <BaseInput 
    v-model="nome"
    label="Nome Completo"
    placeholder="Digite seu nome"
  />

  <!-- Input com ícone -->
  <BaseInput 
    v-model="email"
    type="email"
    label="E-mail"
    icon="email"
    placeholder="seu@email.com"
    :required="true"
  />

  <!-- Input com erro -->
  <BaseInput 
    v-model="senha"
    type="password"
    label="Senha"
    icon="lock"
    :error="senhaError"
    help-text="Mínimo 8 caracteres"
  />

  <!-- Input desabilitado -->
  <BaseInput 
    v-model="readonly"
    label="Campo Somente Leitura"
    :disabled="true"
  />

  <!-- Input com eventos -->
  <BaseInput 
    v-model="busca"
    type="search"
    icon="search"
    placeholder="Buscar pizzas..."
    @input="handleBusca"
    @focus="handleFocus"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/components/BaseInput.vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const senhaError = ref('')
const readonly = ref('Valor fixo')
const busca = ref('')

const handleBusca = (event: Event) => {
  console.log('Buscando:', busca.value)
}

const handleFocus = (event: FocusEvent) => {
  console.log('Input focado')
}
</script>
```

### Estados Visuais
- **Normal**: Borda cinza, foco azul
- **Erro**: Borda vermelha, fundo levemente vermelho
- **Desabilitado**: Fundo cinza, cursor não permitido
- **Com ícone**: Padding ajustado automaticamente

---

## 🎨 BaseIcon.vue

Componente para ícones do Heroicons com integração ao sistema de cores.

### Props
```typescript
interface Props {
  name: string                            // Nome do ícone (obrigatório)
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' // Tamanho
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'white' | 'black' // Cor
  class?: string                          // Classes customizadas
  ariaLabel?: string                      // Label para acessibilidade
}
```

### Exemplo de Uso
```vue
<template>
  <!-- Ícone básico -->
  <BaseIcon name="home" />

  <!-- Ícone com tamanho e cor -->
  <BaseIcon 
    name="cart" 
    size="lg" 
    color="primary" 
  />

  <!-- Ícone com acessibilidade -->
  <BaseIcon 
    name="close" 
    size="sm" 
    aria-label="Fechar modal" 
  />

  <!-- Ícone em botão -->
  <BaseButton variant="ghost">
    <BaseIcon name="search" size="sm" class="mr-2" />
    Buscar
  </BaseButton>
</template>

<script setup lang="ts">
import BaseIcon from '~/components/BaseIcon.vue'
import BaseButton from '~/components/BaseButton.vue'
</script>
```

### Ícones Disponíveis
Veja a lista completa em `/shared/constants/headlessui-guide.md`

---

## 🎯 Padrões de Uso

### Imports Explícitos
```vue
<script setup lang="ts">
// ✅ Sempre importe explicitamente
import BaseButton from '~/components/BaseButton.vue'
import BaseInput from '~/components/BaseInput.vue'
import BaseIcon from '~/components/BaseIcon.vue'
</script>
```

### Nomenclatura PascalCase
```vue
<!-- ✅ Correto -->
<BaseButton />
<BaseInput />
<BaseIcon />

<!-- ❌ Incorreto -->
<base-button />
<baseInput />
```

### Composição de Componentes
```vue
<template>
  <!-- Formulário completo -->
  <form @submit="handleSubmit">
    <BaseInput 
      v-model="form.nome"
      label="Nome"
      icon="user"
      :error="errors.nome"
      required
    />
    
    <BaseInput 
      v-model="form.email"
      type="email"
      label="E-mail"
      icon="email"
      :error="errors.email"
      required
    />
    
    <BaseButton 
      type="submit" 
      variant="primary" 
      size="lg"
      :disabled="!formValid"
    >
      <BaseIcon name="check" size="sm" class="mr-2" />
      Enviar Pedido
    </BaseButton>
  </form>
</template>
```

## 🎨 Integração com Sistema de Cores

Todos os componentes usam as cores definidas em `tailwind.config.js`:

- **primary-*** para elementos principais
- **text-*** para textos
- **background-*** para fundos
- **border-*** para bordas
- **error-***, **success-***, etc. para estados

## ♿ Acessibilidade

- ✅ Labels associados aos inputs
- ✅ ARIA labels em ícones quando necessário
- ✅ Estados de foco visíveis
- ✅ Navegação por teclado
- ✅ Contraste adequado de cores

---
*Componentes base criados e prontos para uso no Clube Pizza* 🍕
