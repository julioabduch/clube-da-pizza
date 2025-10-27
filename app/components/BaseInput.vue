<template>
  <div class="w-full">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId" 
      class="block text-sm font-medium text-text-primary mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error-DEFAULT ml-1">*</span>
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Input Field -->
      <input
        :id="inputId"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />

      <!-- Icon (se fornecido) -->
      <div 
        v-if="icon" 
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <BaseIcon :name="icon" size="sm" color="neutral" />
      </div>
    </div>

    <!-- Mensagem de Erro -->
    <p 
      v-if="error" 
      class="mt-2 text-sm text-error-DEFAULT"
    >
      {{ error }}
    </p>

    <!-- Texto de Ajuda -->
    <p 
      v-if="helpText && !error" 
      class="mt-2 text-sm text-text-tertiary"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'

interface Props {
  /** Valor do input */
  modelValue?: string | number
  /** Tipo do input */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  /** Label do input */
  label?: string
  /** Placeholder do input */
  placeholder?: string
  /** Ícone do input */
  icon?: string
  /** Estado de erro */
  error?: string
  /** Texto de ajuda */
  helpText?: string
  /** Estado desabilitado */
  disabled?: boolean
  /** Campo obrigatório */
  required?: boolean
  /** Tamanho do input */
  size?: 'sm' | 'md' | 'lg'
  /** Classes CSS customizadas */
  class?: string
}

interface Emits {
  /** Evento de atualização do valor */
  (e: 'update:modelValue', value: string | number): void
  /** Evento de blur (perda de foco) */
  (e: 'blur', event: FocusEvent): void
  /** Evento de focus (ganho de foco) */
  (e: 'focus', event: FocusEvent): void
  /** Evento de input (digitação) */
  (e: 'input', event: Event): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  required: false
})

const emit = defineEmits<Emits>()

// ID único para o input
const inputId = ref(`input-${Math.random().toString(36).substr(2, 9)}`)

// Computed para o valor do input
const inputValue = computed({
  get: () => props.modelValue || '',
  set: (value: string | number) => emit('update:modelValue', value)
})

// Classes base do input
const baseClasses = 'block w-full rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'

// Classes de tamanho
const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg'
}

// Classes com ícone (adiciona padding à esquerda)
const iconClasses = props.icon ? 'pl-10' : ''

// Classes de estado
const stateClasses = computed(() => {
  if (props.error) {
    return 'border-error-DEFAULT bg-error-light/10 text-error-dark focus:ring-error-DEFAULT focus:border-error-DEFAULT'
  }
  
  if (props.disabled) {
    return 'border-border-light bg-background-tertiary text-text-muted cursor-not-allowed'
  }
  
  return 'border-border-DEFAULT bg-background-primary text-text-primary hover:border-border-dark focus:ring-primary-500 focus:border-primary-500'
})

// Computed para classes do input
const inputClasses = computed(() => {
  const classes = [
    baseClasses,
    sizeClasses[props.size],
    iconClasses,
    stateClasses.value
  ]
  
  if (props.class) {
    classes.push(props.class)
  }
  
  return classes.join(' ')
})

// Handlers de eventos
const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleInput = (event: Event) => {
  emit('input', event)
}
</script>
