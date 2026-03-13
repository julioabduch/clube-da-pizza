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
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />

      <!-- Ícone de visualizar/ocultar senha -->
      <button
        type="button"
        @click="togglePassword"
        class="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors duration-200"
        :disabled="disabled"
      >
        <BaseIcon 
          :name="showPassword ? 'eye-slash' : 'eye'" 
          size="sm" 
          :color="disabled ? 'neutral' : 'secondary'" 
        />
      </button>
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
  modelValue?: string
  /** Label do input */
  label?: string
  /** Placeholder do input */
  placeholder?: string
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
  (e: 'update:modelValue', value: string): void
  /** Evento de blur (perda de foco) */
  (e: 'blur', event: FocusEvent): void
  /** Evento de focus (ganho de foco) */
  (e: 'focus', event: FocusEvent): void
  /** Evento de input (digitação) */
  (e: 'input', event: Event): void
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  disabled: false,
  required: false,
  placeholder: 'Digite sua senha'
})

const emit = defineEmits<Emits>()

// Estados reativos
const showPassword = ref(false)

// ID único para o input
const inputId = ref(`password-${Math.random().toString(36).substr(2, 9)}`)

// Computed para o valor do input
const inputValue = computed({
  get: () => props.modelValue || '',
  set: (value: string) => emit('update:modelValue', value)
})

// Classes base do input
const baseClasses = 'block w-full rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 pr-10'

// Classes de tamanho
const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg'
}

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
    stateClasses.value
  ]
  
  if (props.class) {
    classes.push(props.class)
  }
  
  return classes.join(' ')
})

// Métodos
const togglePassword = () => {
  if (!props.disabled) {
    showPassword.value = !showPassword.value
  }
}

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
