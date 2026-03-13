<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 p-4">
    <!-- Header simples -->
    <header class="bg-white shadow-lg rounded-lg mb-8">
      <div class="max-w-4xl mx-auto px-6 py-4">
        <h1 class="text-2xl font-bold text-gray-800">
          🍕 Clube Pizza
        </h1>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="max-w-4xl mx-auto text-center">
      <div class="bg-white rounded-xl shadow-xl p-8 mb-8">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Sua Pizza Toda Semana!
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Assine nosso clube e receba uma pizza gigante toda semana
        </p>
        
        <!-- Botões principais -->
        <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <NuxtLink 
            to="/planos" 
            class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Ver Planos
          </NuxtLink>
          
          <NuxtLink 
            to="/login" 
            class="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Fazer Login
          </NuxtLink>
        </div>
      </div>

      <!-- Links de teste -->
      <div class="bg-white rounded-lg p-6">
        <h3 class="text-lg font-bold mb-4">Links de Teste:</h3>
        <div class="space-x-4">
          <NuxtLink to="/dashboard" class="text-blue-500 hover:underline">Dashboard</NuxtLink>
          <NuxtLink to="/escolher-sabores" class="text-blue-500 hover:underline">Escolher Sabores</NuxtLink>
          <NuxtLink to="/debug" class="text-blue-500 hover:underline">Debug</NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Meta tags para SEO
useHead({
  title: 'Clube Pizza - Sua Pizza Toda Semana',
  meta: [
    { name: 'description', content: 'Assine o Clube Pizza e receba uma pizza gigante toda semana. Planos a partir de R$ 79,90.' }
  ]
})

console.log('Homepage simplificada carregada!')
</script>
