<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Email Field -->
    <BaseInput
      v-model="formData.email"
      type="email"
      label="E-mail"
      placeholder="Digite seu e-mail"
      icon="envelope"
      required
      :error="errors.email"
      @blur="validateEmail"
    />

    <!-- Password Field -->
    <InputPassword
      v-model="formData.password"
      label="Senha"
      placeholder="Digite sua senha"
      required
      :error="errors.password"
      @blur="validatePassword"
    />

    <!-- Submit Button with more spacing -->
    <div class="pt-2">
      <BaseButton
        type="submit"
        variant="primary"
        size="lg"
        class="w-full"
        :disabled="isSubmitting || !isFormValid"
      >
        <BaseIcon 
          v-if="isSubmitting" 
          name="clock" 
          size="sm" 
          color="white" 
          class="mr-2 animate-spin" 
        />
        <BaseIcon 
          v-else 
          name="arrow-right" 
          size="sm" 
          color="white" 
          class="mr-2" 
        />
        {{ isSubmitting ? 'Entrando...' : 'Entrar' }}
      </BaseButton>
    </div>

    <!-- General Error Message -->
    <div v-if="generalError" class="text-center">
      <p class="text-sm text-error-DEFAULT">
        {{ generalError }}
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseInput from './BaseInput.vue'
import InputPassword from './InputPassword.vue'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

interface LoginData {
  email: string
  password: string
}

interface Emits {
  /** Evento disparado ao submeter o formulário com dados válidos */
  (e: 'submit', data: LoginData): void
}

const emit = defineEmits<Emits>()

// Estados reativos
const isSubmitting = ref(false)
const generalError = ref<string | null>(null)

// Dados do formulário
const formData = ref<LoginData>({
  email: '',
  password: ''
})

// Erros de validação
const errors = ref({
  email: '',
  password: ''
})

// Validação de email
const validateEmail = () => {
  const email = formData.value.email.trim()
  
  if (!email) {
    errors.value.email = 'E-mail é obrigatório'
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    errors.value.email = 'E-mail inválido'
    return false
  }
  
  errors.value.email = ''
  return true
}

// Validação de senha
const validatePassword = () => {
  const password = formData.value.password
  
  if (!password) {
    errors.value.password = 'Senha é obrigatória'
    return false
  }
  
  if (password.length < 6) {
    errors.value.password = 'Senha deve ter pelo menos 6 caracteres'
    return false
  }
  
  errors.value.password = ''
  return true
}

// Verificar se o formulário é válido
const isFormValid = computed(() => {
  return formData.value.email.trim() !== '' && 
         formData.value.password !== '' && 
         !errors.value.email && 
         !errors.value.password
})

// Validar todo o formulário
const validateForm = (): boolean => {
  const emailValid = validateEmail()
  const passwordValid = validatePassword()
  
  return emailValid && passwordValid
}

// Handler de submit
const handleSubmit = () => {
  // Limpar erro geral
  generalError.value = null
  
  // Validar formulário
  if (!validateForm()) {
    return
  }
  
  // Emitir evento com os dados
  emit('submit', {
    email: formData.value.email.trim(),
    password: formData.value.password
  })
}

// Função para definir estado de carregamento (exposta para o componente pai)
const setLoading = (loading: boolean) => {
  isSubmitting.value = loading
}

// Função para definir erro geral (exposta para o componente pai)
const setError = (error: string | null) => {
  generalError.value = error
}

// Função para limpar o formulário (exposta para o componente pai)
const resetForm = () => {
  formData.value.email = ''
  formData.value.password = ''
  errors.value.email = ''
  errors.value.password = ''
  generalError.value = null
  isSubmitting.value = false
}

// Expor funções para o componente pai
defineExpose({
  setLoading,
  setError,
  resetForm
})
</script>
