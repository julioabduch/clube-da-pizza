<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
      
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          🍕 Clube Pizza
        </h1>
        <p class="text-gray-600">
          Faça login para acessar sua conta
        </p>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
        {{ errorMessage }}
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
        {{ successMessage }}
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>

      <!-- Divider -->
      <div class="my-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">ou</span>
          </div>
        </div>
      </div>

      <!-- Alternative Actions -->
      <div class="space-y-3 text-center">
        <NuxtLink 
          to="/signup"
          class="block text-orange-600 hover:text-orange-700 font-medium"
        >
          Criar nova conta
        </NuxtLink>
        
        <NuxtLink 
          to="/"
          class="block text-gray-600 hover:text-gray-700"
        >
          Voltar para o início
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Watch user - se autenticado, redirecionar (padrão do guia Supabase)
watch(user, () => {
  if (user.value) {
    console.log('✅ Usuário detectado no watcher:', user.value.email)
    navigateTo('/dashboard')
  }
}, { immediate: true })

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    console.log('🔐 Tentando login...')
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    
    if (error) {
      console.error('❌ Erro no login:', error)
      errorMessage.value = error.message
      loading.value = false
      return
    }
    
    console.log('✅ Login bem-sucedido:', data.user?.email)
    console.log('📍 Session criada:', !!data.session)
    successMessage.value = 'Login realizado com sucesso!'
    // O watcher vai pegar a mudança no user e redirecionar
    
  } catch (err: any) {
    console.error('❌ Exceção no login:', err)
    errorMessage.value = err.message || 'Erro ao fazer login'
    loading.value = false
  }
}
</script>
