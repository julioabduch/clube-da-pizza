<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
      
      <!-- Loading State -->
      <div class="space-y-4">
        <div class="w-16 h-16 mx-auto">
          <div class="animate-spin rounded-full h-16 w-16 border-4 border-orange-200 border-t-orange-600"></div>
        </div>
        <h1 class="text-2xl font-bold text-gray-900">
          Aguarde...
        </h1>
        <p class="text-gray-600">
          Processando sua autenticação
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Padrão do guia Supabase - Página de Confirmação
const user = useSupabaseUser()

// Watch user - quando detectar usuário autenticado, redireciona
watch(user, () => {
  if (user.value) {
    console.log('✅ Usuário confirmado:', user.value.email)
    navigateTo('/')
  }
}, { immediate: true })
</script>
