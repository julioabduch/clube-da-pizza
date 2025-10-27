# Headless UI + Heroicons - Clube Pizza

Guia completo de uso do Headless UI e Heroicons no projeto.

## 📦 Instalação Concluída

- ✅ `@headlessui/vue` - Componentes acessíveis sem estilo
- ✅ `@heroicons/vue` - Ícones SVG oficiais do Tailwind

## 🔧 Configuração

### Plugin Global (`/app/plugins/headlessui.client.ts`)
Todos os componentes do Headless UI estão registrados globalmente com prefixo `Headless`:

```vue
<!-- Uso direto nos templates -->
<HeadlessDialog>
<HeadlessMenu>
<HeadlessSwitch>
<!-- etc... -->
```

### Composable de Ícones (`/app/composables/useIcon.ts`)
Sistema inteligente para gerenciar ícones do Heroicons:

```typescript
// Uso no script setup
const homeIcon = useIcon('home')
const cartIcon = useIcon('cart')

// Verificar se ícone existe
const exists = hasIcon('pizza') // false

// Listar todos os ícones
const allIcons = getAvailableIcons()
```

### Componente Base de Ícones (`/app/components/BaseIcon.vue`)
Componente wrapper para usar ícones facilmente:

```vue
<!-- Uso simples -->
<BaseIcon name="home" />

<!-- Com propriedades -->
<BaseIcon 
  name="cart" 
  size="lg" 
  color="primary" 
  class="hover:scale-110" 
  aria-label="Carrinho de compras"
/>
```

## 🎨 Componentes Disponíveis

### Dialog (Modal)
```vue
<template>
  <HeadlessDialog :open="isOpen" @close="closeModal">
    <div class="fixed inset-0 bg-black/50" />
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <HeadlessDialogPanel class="bg-white rounded-lg p-6">
        <HeadlessDialogTitle>Título do Modal</HeadlessDialogTitle>
        <p>Conteúdo do modal...</p>
      </HeadlessDialogPanel>
    </div>
  </HeadlessDialog>
</template>
```

### Menu (Dropdown)
```vue
<template>
  <HeadlessMenu as="div" class="relative">
    <HeadlessMenuButton>
      Abrir Menu
    </HeadlessMenuButton>
    <HeadlessMenuItems class="absolute bg-white shadow-lg">
      <HeadlessMenuItem v-slot="{ active }">
        <a :class="{ 'bg-blue-500': active }">Item 1</a>
      </HeadlessMenuItem>
    </HeadlessMenuItems>
  </HeadlessMenu>
</template>
```

### Switch (Toggle)
```vue
<template>
  <HeadlessSwitch
    v-model="enabled"
    :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">Ativar notificações</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white transition"
    />
  </HeadlessSwitch>
</template>
```

### Listbox (Select)
```vue
<template>
  <HeadlessListbox v-model="selected">
    <HeadlessListboxButton>
      {{ selected.name }}
    </HeadlessListboxButton>
    <HeadlessListboxOptions>
      <HeadlessListboxOption
        v-for="person in people"
        :key="person.id"
        :value="person"
        v-slot="{ active, selected }"
      >
        <li :class="{ 'bg-blue-500': active, 'font-bold': selected }">
          {{ person.name }}
        </li>
      </HeadlessListboxOption>
    </HeadlessListboxOptions>
  </HeadlessListbox>
</template>
```

### Combobox (Autocomplete)
```vue
<template>
  <HeadlessCombobox v-model="selected">
    <HeadlessComboboxInput 
      @change="query = $event.target.value"
      :display-value="(person) => person?.name"
    />
    <HeadlessComboboxOptions>
      <HeadlessComboboxOption
        v-for="person in filteredPeople"
        :key="person.id"
        :value="person"
      >
        {{ person.name }}
      </HeadlessComboboxOption>
    </HeadlessComboboxOptions>
  </HeadlessCombobox>
</template>
```

### Disclosure (Expandir/Recolher)
```vue
<template>
  <HeadlessDisclosure v-slot="{ open }">
    <HeadlessDisclosureButton>
      <span>Expandir conteúdo</span>
      <BaseIcon :name="open ? 'chevron-up' : 'chevron-down'" />
    </HeadlessDisclosureButton>
    <HeadlessDisclosurePanel>
      Conteúdo expandido aqui...
    </HeadlessDisclosurePanel>
  </HeadlessDisclosure>
</template>
```

### RadioGroup
```vue
<template>
  <HeadlessRadioGroup v-model="selectedPlan">
    <HeadlessRadioGroupOption 
      v-for="plan in plans" 
      :key="plan.name" 
      :value="plan"
      v-slot="{ checked, active }"
    >
      <div :class="{ 'bg-blue-200': active, 'bg-blue-500': checked }">
        {{ plan.name }}
      </div>
    </HeadlessRadioGroupOption>
  </HeadlessRadioGroup>
</template>
```

### Tabs
```vue
<template>
  <HeadlessTabGroup>
    <HeadlessTabList>
      <HeadlessTab v-slot="{ selected }">
        <button :class="{ 'bg-blue-500': selected }">Tab 1</button>
      </HeadlessTab>
      <HeadlessTab v-slot="{ selected }">
        <button :class="{ 'bg-blue-500': selected }">Tab 2</button>
      </HeadlessTab>
    </HeadlessTabList>
    <HeadlessTabPanels>
      <HeadlessTabPanel>Conteúdo Tab 1</HeadlessTabPanel>
      <HeadlessTabPanel>Conteúdo Tab 2</HeadlessTabPanel>
    </HeadlessTabPanels>
  </HeadlessTabGroup>
</template>
```

## 🎯 Ícones Disponíveis

### Navegação
- `home`, `user`, `settings`, `notifications`

### Ações
- `plus`, `minus`, `close`, `check`

### Setas
- `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`
- `arrow-right`, `arrow-left`

### Interface
- `menu`, `search`, `heart`, `star`, `cart`

### Comunicação
- `email`, `phone`, `chat`, `share`

### Estados
- `warning`, `info`, `success`, `error`

### Pizza/Restaurante
- `clock`, `location`, `delivery`, `gift`, `sparkles`, `fire`

### Versões Sólidas
Adicione `-solid` ao final: `home-solid`, `star-solid`, etc.

## 🎨 Integração com Sistema de Cores

Todos os componentes usam as cores do sistema:

```vue
<!-- Botões com cores do tema -->
<button class="bg-gradient-primary text-text-inverse">
  Primary Button
</button>

<!-- Modal com cores do sistema -->
<HeadlessDialogPanel class="bg-background-primary border border-border-light">
  <!-- conteúdo -->
</HeadlessDialogPanel>

<!-- Ícones com cores semânticas -->
<BaseIcon name="success" color="success" />
<BaseIcon name="warning" color="warning" />
```

## 🚀 Exemplo Prático

Veja a implementação na `pages/index.vue`:
- Menu mobile responsivo
- Modal de cardápio com transições
- Integração completa com o design system

## 📱 Responsividade

Use classes do Tailwind para responsividade:

```vue
<!-- Menu desktop/mobile -->
<nav class="hidden md:flex">Desktop Menu</nav>
<div class="md:hidden">Mobile Menu</div>

<!-- Modal responsivo -->
<HeadlessDialogPanel class="mx-auto max-w-sm sm:max-w-lg w-full">
  <!-- conteúdo -->
</HeadlessDialogPanel>
```

## ♿ Acessibilidade

O Headless UI cuida automaticamente de:
- ✅ Foco e navegação por teclado
- ✅ ARIA labels e roles
- ✅ Estados de elementos
- ✅ Screen readers

Use sempre `aria-label` quando necessário:

```vue
<BaseIcon name="close" aria-label="Fechar modal" />
```

---
*Headless UI + Heroicons instalados e configurados no Clube Pizza* 🍕
