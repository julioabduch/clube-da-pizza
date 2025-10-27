<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Tipo do botão */
  type?: 'button' | 'submit' | 'reset'
  /** Variante visual do botão */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  /** Tamanho do botão */
  size?: 'sm' | 'md' | 'lg'
  /** Estado desabilitado */
  disabled?: boolean
  /** Classes CSS customizadas */
  class?: string
}

interface Emits {
  /** Evento de clique do botão */
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false
})

const emit = defineEmits<Emits>()

// Classes base do botão
const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

// Classes de tamanho
const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

// Classes de variante
const variantClasses = {
  primary: 'bg-gradient-primary text-text-inverse hover:shadow-primary focus:ring-primary-500',
  secondary: 'bg-gradient-secondary text-text-inverse hover:shadow-secondary focus:ring-secondary-500',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
  ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
  danger: 'bg-error-DEFAULT text-text-inverse hover:bg-error-dark focus:ring-error-DEFAULT'
}

// Computed para classes do botão
const buttonClasses = computed(() => {
  const classes = [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant]
  ]
  
  if (props.class) {
    classes.push(props.class)
  }
  
  return classes.join(' ')
})

// Handler de clique
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
