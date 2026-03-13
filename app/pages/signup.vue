<template>
  <div class="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
    <div class="max-w-md w-full space-y-8">
      
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Criar sua conta
        </h1>
        <p class="text-sm sm:text-base text-text-secondary">
          Junte-se ao Clube Pizza e receba suas pizzas semanais
        </p>
      </div>

      <!-- Signup Card -->
      <div class="bg-background-primary rounded-xl shadow-medium border border-border-light p-6 sm:p-8">
        
        <!-- Logo ou Ícone -->
        <div class="text-center mb-6">
          <div class="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
            <BaseIcon name="user-plus" size="lg" color="white" />
          </div>
        </div>

        <!-- Signup Form -->
        <form @submit.prevent="handleSignup" class="space-y-6">
          
          <!-- Nome Completo -->
          <BaseInput
            v-model="formData.fullName"
            type="text"
            label="Nome Completo"
            placeholder="Digite seu nome"
            icon="user"
            required
            :error="errors.fullName"
          />

          <!-- Email Field -->
          <BaseInput
            v-model="formData.email"
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            icon="envelope"
            required
            :error="errors.email"
          />

          <!-- Password Field -->
          <InputPassword
            v-model="formData.password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            required
            :error="errors.password"
          />

          <!-- Confirm Password Field -->
          <InputPassword
            v-model="formData.confirmPassword"
            label="Confirmar Senha"
            placeholder="Digite a senha novamente"
            required
            :error="errors.confirmPassword"
          />

          <!-- Terms -->
          <div class="flex items-start gap-3">
            <input
              id="terms"
              v-model="formData.acceptedTerms"
              type="checkbox"
              class="mt-1 h-4 w-4 rounded border-border-DEFAULT text-primary-600 focus:ring-primary-500"
            />
            <label for="terms" class="text-sm text-text-secondary">
              Aceito os 
              <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
                termos de uso
              </a>
              e a
              <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
                política de privacidade
              </a>
            </label>
          </div>

          <!-- Submit Button -->
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
                name="user-plus" 
                size="sm" 
                color="white" 
                class="mr-2" 
              />
              {{ isSubmitting ? 'Criando conta...' : 'Criar Conta' }}
            </BaseButton>
          </div>

          <!-- General Error Message -->
          <div v-if="generalError" class="text-center">
            <p class="text-sm text-error-DEFAULT">
              {{ generalError }}
            </p>
          </div>
        </form>

      </div>

      <!-- Footer Actions -->
      <div class="text-center space-y-4">
        <p class="text-sm text-text-secondary">
          Já tem uma conta?
        </p>
        
        <BaseButton
          variant="outline"
          size="md"
          @click="goToLogin"
          class="w-full"
        >
          <BaseIcon name="arrow-right" size="sm" class="mr-2" />
          Fazer Login
        </BaseButton>

        <BaseButton
          variant="ghost"
          size="sm"
          @click="goToHome"
          class="w-full text-text-tertiary"
        >
          <BaseIcon name="arrow-left" size="sm" class="mr-2" />
          Voltar ao início
        </BaseButton>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from '~/components/BaseButton.vue'
import BaseIcon from '~/components/BaseIcon.vue'
import BaseInput from '~/components/BaseInput.vue'
import InputPassword from '~/components/InputPassword.vue'

// Meta tags para SEO
useHead({
  title: 'Criar Conta - Clube Pizza',
  meta: [
    { name: 'description', content: 'Crie sua conta no Clube Pizza e receba pizzas deliciosas toda semana' }
  ]
})

const supabase = useSupabaseClient()

// Estados reativos
const isSubmitting = ref(false)
const generalError = ref<string | null>(null)

// Dados do formulário
const formData = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptedTerms: false
})

// Erros de validação
const errors = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// Verificar se o formulário é válido
const isFormValid = computed(() => {
  return (
    formData.value.fullName.trim() !== '' &&
    formData.value.email.trim() !== '' && 
    formData.value.password !== '' &&
    formData.value.confirmPassword !== '' &&
    formData.value.password === formData.value.confirmPassword &&
    formData.value.acceptedTerms &&
    !errors.value.email && 
    !errors.value.password
  )
})

// Handler de signup
const handleSignup = async () => {
  // Limpar erro geral
  generalError.value = null
  
  // Validações básicas
  if (!formData.value.fullName.trim()) {
    errors.value.fullName = 'Nome é obrigatório'
    return
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'E-mail é obrigatório'
    return
  }
  
  if (formData.value.password.length < 6) {
    errors.value.password = 'Senha deve ter pelo menos 6 caracteres'
    return
  }
  
  if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'As senhas não coincidem'
    return
  }
  
  if (!formData.value.acceptedTerms) {
    generalError.value = 'Você precisa aceitar os termos de uso'
    return
  }
  
  try {
    isSubmitting.value = true
    
    // Criar conta no Supabase
    const { data: authData, error } = await supabase.auth.signUp({
      email: formData.value.email,
      password: formData.value.password,
      options: {
        data: {
          full_name: formData.value.fullName,
          name: formData.value.fullName
        },
        emailRedirectTo: `${window.location.origin}/confirm`
      }
    })
    
    if (error) {
      console.error('Erro no cadastro:', error)
      
      // Traduzir mensagens de erro comuns
      let errorMessage = 'Erro ao criar conta. Tente novamente.'
      
      if (error.message.includes('already registered')) {
        errorMessage = 'Este e-mail já está cadastrado. Faça login.'
      } else if (error.message.includes('invalid email')) {
        errorMessage = 'E-mail inválido.'
      } else if (error.message.includes('Password should be at least')) {
        errorMessage = 'Senha muito fraca. Use pelo menos 6 caracteres.'
      }
      
      generalError.value = errorMessage
      return
    }
    
    // Sucesso - mostrar mensagem e redirecionar
    console.log('Conta criada com sucesso:', authData.user?.email)
    
    alert('Conta criada com sucesso! Verifique seu e-mail para confirmar.')
    
    // Redirecionar para login ou confirm
    navigateTo('/login')
    
  } catch (error) {
    console.error('Erro inesperado no cadastro:', error)
    generalError.value = 'Erro inesperado. Tente novamente.'
    
  } finally {
    isSubmitting.value = false
  }
}

// Funções de navegação
const goToLogin = () => {
  navigateTo('/login')
}

const goToHome = () => {
  navigateTo('/')
}

// Verificar se usuário já está logado
onMounted(() => {
  const user = useSupabaseUser()
  
  if (user.value) {
    navigateTo('/dashboard')
  }
})
</script>
