<template>
  <div class="min-h-screen bg-red-500 text-white p-4 sm:p-6 lg:p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
        🚨 DEBUG - Página Funcionando!
      </h1>
      <p class="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">
        Se você está vendo isto, o Nuxt está carregando páginas.
      </p>
      <p class="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
        Hora: {{ new Date().toLocaleTimeString() }}
      </p>
      
      <!-- Informações do dispositivo -->
      <div class="bg-red-600 rounded-lg p-4 sm:p-6">
        <h2 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Informações do Dispositivo</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
          <div>
            <strong>Largura da tela:</strong> <span id="screen-width">{{ screenWidth }}px</span>
          </div>
          <div>
            <strong>Altura da tela:</strong> <span id="screen-height">{{ screenHeight }}px</span>
          </div>
          <div>
            <strong>User Agent:</strong>
            <div class="break-all text-xs sm:text-sm mt-1">{{ userAgent }}</div>
          </div>
        </div>
      </div>
      
      <!-- Botão para voltar -->
      <div class="mt-6 sm:mt-8">
        <button 
          @click="$router.push('/')"
          class="bg-white text-red-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold hover:bg-red-50 transition-colors text-sm sm:text-base"
        >
          ← Voltar para Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
console.log('DEBUG: Página debug carregada!')

// Estados reativos para informações do dispositivo
const screenWidth = ref(0)
const screenHeight = ref(0)
const userAgent = ref('')

// Detectar informações do dispositivo
onMounted(() => {
  if (process.client) {
    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight
    userAgent.value = navigator.userAgent
    
    // Atualizar dimensões quando a tela for redimensionada
    const updateDimensions = () => {
      screenWidth.value = window.innerWidth
      screenHeight.value = window.innerHeight
    }
    
    window.addEventListener('resize', updateDimensions)
    
    // Limpar evento quando componente for desmontado
    onUnmounted(() => {
      window.removeEventListener('resize', updateDimensions)
    })
  }
})
</script>
