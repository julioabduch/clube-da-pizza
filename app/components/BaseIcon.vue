<template>
  <component 
    :is="iconComponent" 
    v-if="iconComponent"
    :class="iconClasses"
    :aria-hidden="!ariaLabel"
    :aria-label="ariaLabel"
  />
  <span v-else class="inline-block w-5 h-5 bg-neutral-300 rounded" :title="`Ícone '${name}' não encontrado`"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Nome do ícone (ex: 'home', 'user', 'cart') */
  name: string
  /** Tamanho do ícone */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /** Cor do ícone */
  color?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'white' | 'black'
  /** Classes CSS customizadas */
  class?: string
  /** Label para acessibilidade */
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'neutral'
})

// Composable para obter o ícone
const { useIcon } = await import('~/composables/useIcon')
const iconComponent = useIcon(props.name)

// Classes de tamanho
const sizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4', 
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10'
}

// Classes de cor
const colorClasses = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500', 
  neutral: 'text-neutral-600',
  success: 'text-success-DEFAULT',
  warning: 'text-warning-DEFAULT',
  error: 'text-error-DEFAULT',
  info: 'text-info-DEFAULT',
  white: 'text-white',
  black: 'text-black'
}

// Computed para classes do ícone
const iconClasses = computed(() => {
  const classes = [
    sizeClasses[props.size],
    colorClasses[props.color]
  ]
  
  if (props.class) {
    classes.push(props.class)
  }
  
  return classes.join(' ')
})
</script>
