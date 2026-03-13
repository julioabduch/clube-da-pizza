<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600">
    
    <!-- Header/Navbar -->
    <nav class="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3">
            <span class="text-4xl">🍕</span>
            <h1 class="text-2xl font-bold text-white">Clube Pizza</h1>
          </div>
          
          <div class="flex gap-3">
            <NuxtLink
              v-if="!user"
              to="/login"
              class="px-6 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition"
            >
              Entrar
            </NuxtLink>
            <NuxtLink
              v-else
              to="/dashboard"
              class="px-6 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition"
            >
              Minha Conta
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Texto Principal -->
        <div class="text-white">
          <h2 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pizzas Deliciosas<br/>
            Toda Semana! 🍕
          </h2>
          <p class="text-xl lg:text-2xl mb-8 text-white/90">
            Assine nosso clube e receba 1 pizza gigante por semana com os melhores sabores.
            Entrega grátis e ingredientes premium!
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/planos"
              class="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-orange-50 transition text-center shadow-xl"
            >
              Ver Planos
            </NuxtLink>
            <NuxtLink
              v-if="user"
              to="/dashboard"
              class="px-8 py-4 bg-orange-700 text-white rounded-lg font-bold text-lg hover:bg-orange-800 transition text-center shadow-xl"
            >
              Meu Dashboard
            </NuxtLink>
          </div>
        </div>

        <!-- Card de Destaque -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <div class="text-center mb-6">
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Bem-vindo ao Clube!
            </h3>
            <p class="text-gray-600">
              Comece com 7 dias grátis
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <div>
                <h4 class="font-bold text-gray-900">Entrega Grátis</h4>
                <p class="text-gray-600 text-sm">Sem taxa de delivery em toda a cidade</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <div>
                <h4 class="font-bold text-gray-900">Ingredientes Premium</h4>
                <p class="text-gray-600 text-sm">Sempre frescos e de alta qualidade</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <div>
                <h4 class="font-bold text-gray-900">Flexibilidade Total</h4>
                <p class="text-gray-600 text-sm">Escolha quando receber suas pizzas</p>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-gray-200 text-center">
            <p class="text-sm text-gray-500 mb-3">A partir de</p>
            <p class="text-4xl font-bold text-orange-600 mb-4">R$ 79,90<span class="text-lg text-gray-500">/mês</span></p>
            <NuxtLink
              to="/planos"
              class="block w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
            >
              Começar Agora
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white/10 backdrop-blur-sm py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold text-white text-center mb-12">
          Por que escolher o Clube Pizza?
        </h3>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="text-5xl mb-4">💰</div>
            <h4 class="font-bold text-xl text-gray-900 mb-2">Economia</h4>
            <p class="text-gray-600">
              Economize até 40% comparado aos pedidos avulsos
            </p>
          </div>
          
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="text-5xl mb-4">🎨</div>
            <h4 class="font-bold text-xl text-gray-900 mb-2">Variedade</h4>
            <p class="text-gray-600">
              Mais de 8 sabores disponíveis para você escolher
            </p>
          </div>
          
          <div class="bg-white rounded-xl p-6 text-center">
            <div class="text-5xl mb-4">⚡</div>
            <h4 class="font-bold text-xl text-gray-900 mb-2">Praticidade</h4>
            <p class="text-gray-600">
              Sem preocupação, sua pizza chega toda semana
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-white/5 backdrop-blur-sm py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/80">
        <p>&copy; 2026 Clube Pizza. Feito com ❤️ e muito queijo!</p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

// Meta tags para SEO
useHead({
  title: 'Clube Pizza - Pizzas Deliciosas Toda Semana',
  meta: [
    { name: 'description', content: 'Assine o Clube Pizza e receba 1 pizza gigante por semana. Entrega grátis, ingredientes premium e preços incríveis!' }
  ]
})
</script>
