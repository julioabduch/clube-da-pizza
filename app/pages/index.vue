<template>
  <div class="min-h-screen bg-gradient-hero">
    <!-- Header -->
    <header class="bg-background-primary shadow-medium border-b border-border-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <h1 class="text-3xl font-bold text-text-primary">
            🍕 Clube Pizza
          </h1>
          <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-text-secondary hover:text-primary-500 transition-colors font-medium">Home</a>
            <a href="#" class="text-text-secondary hover:text-primary-500 transition-colors font-medium">Menu</a>
            <a href="#" class="text-text-secondary hover:text-primary-500 transition-colors font-medium">Sobre</a>
          </nav>
          
          <!-- Menu Mobile com Headless UI -->
          <div class="md:hidden">
            <HeadlessMenu as="div" class="relative inline-block text-left">
              <HeadlessMenuButton class="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-500 transition-colors">
                <BaseIcon name="menu" size="md" color="neutral" />
              </HeadlessMenuButton>
              
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <HeadlessMenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-background-primary rounded-md shadow-medium ring-1 ring-border-light focus:outline-none">
                  <div class="py-1">
                    <HeadlessMenuItem v-slot="{ active }">
                      <a href="#" :class="[
                        active ? 'bg-primary-50 text-primary-600' : 'text-text-secondary',
                        'block px-4 py-2 text-sm font-medium transition-colors'
                      ]">
                        Home
                      </a>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <a href="#" :class="[
                        active ? 'bg-primary-50 text-primary-600' : 'text-text-secondary',
                        'block px-4 py-2 text-sm font-medium transition-colors'
                      ]">
                        Menu
                      </a>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <a href="#" :class="[
                        active ? 'bg-primary-50 text-primary-600' : 'text-text-secondary',
                        'block px-4 py-2 text-sm font-medium transition-colors'
                      ]">
                        Sobre
                      </a>
                    </HeadlessMenuItem>
                  </div>
                </HeadlessMenuItems>
              </transition>
            </HeadlessMenu>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section class="text-center mb-16">
        <h2 class="text-5xl font-extrabold text-text-primary mb-4">
          Bem-vindo ao <span class="bg-gradient-primary bg-clip-text text-transparent">Clube Pizza</span>
        </h2>
        <p class="text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          As melhores pizzas da cidade, feitas com ingredientes frescos e muito amor. 
          Experimente nossos sabores únicos e se apaixone!
        </p>
        <button 
          @click="openModal"
          class="bg-gradient-primary hover:shadow-primary text-text-inverse font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1 hover:scale-105"
        >
          Ver Cardápio
        </button>
      </section>

      <!-- Features Grid -->
      <section class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="bg-background-primary rounded-xl shadow-soft p-8 text-center hover:shadow-medium transition-all duration-300 border border-border-light hover:border-primary-200">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-200 transition-colors">
            <span class="text-2xl">🍕</span>
          </div>
          <h3 class="text-xl font-semibold text-text-primary mb-3">Receitas Artesanais</h3>
          <p class="text-text-secondary leading-relaxed">
            Nossas pizzas são preparadas com receitas tradicionais e ingredientes selecionados.
          </p>
        </div>

        <div class="bg-background-primary rounded-xl shadow-soft p-8 text-center hover:shadow-medium transition-all duration-300 border border-border-light hover:border-primary-200">
          <div class="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-success-light/80 transition-colors">
            <span class="text-2xl">🚚</span>
          </div>
          <h3 class="text-xl font-semibold text-text-primary mb-3">Entrega Rápida</h3>
          <p class="text-text-secondary leading-relaxed">
            Delivery em até 30 minutos para toda a cidade. Sua pizza quentinha na sua casa!
          </p>
        </div>

        <div class="bg-background-primary rounded-xl shadow-soft p-8 text-center hover:shadow-medium transition-all duration-300 border border-border-light hover:border-primary-200">
          <div class="w-16 h-16 bg-warning-light rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-warning-light/80 transition-colors">
            <span class="text-2xl">⭐</span>
          </div>
          <h3 class="text-xl font-semibold text-text-primary mb-3">5 Estrelas</h3>
          <p class="text-text-secondary leading-relaxed">
            Avaliação máxima dos nossos clientes. Qualidade que você pode confiar.
          </p>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="bg-gradient-primary rounded-2xl p-12 text-center text-text-inverse shadow-primary relative overflow-hidden">
        <!-- Efeito de brilho de fundo -->
        <div class="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse"></div>
        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-4">Pronto para uma experiência incrível?</h3>
          <p class="text-xl mb-8 opacity-90 leading-relaxed">
            Faça seu pedido agora e receba em casa com desconto especial de primeira compra!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-background-primary text-primary-600 font-bold py-3 px-8 rounded-full hover:bg-background-secondary transition-all duration-300 shadow-medium hover:shadow-hard hover:scale-105">
              Fazer Pedido
            </button>
            <button class="border-2 border-text-inverse text-text-inverse font-bold py-3 px-8 rounded-full hover:bg-text-inverse hover:text-primary-600 transition-all duration-300 hover:scale-105">
              Ver Promoções
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gradient-dark text-text-inverse py-12 mt-16 border-t border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-text-muted">
          © 2024 Clube Pizza. Todos os direitos reservados.
        </p>
        <div class="mt-4 space-x-6">
          <a href="#" class="text-text-muted hover:text-primary-400 transition-colors font-medium">Instagram</a>
          <a href="#" class="text-text-muted hover:text-primary-400 transition-colors font-medium">Facebook</a>
          <a href="#" class="text-text-muted hover:text-primary-400 transition-colors font-medium">WhatsApp</a>
        </div>
      </div>
    </footer>

    <!-- Modal de Cardápio usando Headless UI -->
    <HeadlessDialog :open="isModalOpen" @close="closeModal" class="relative z-50">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm" aria-hidden="true" />
      
      <!-- Full-screen container to center the panel -->
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <HeadlessDialogPanel class="mx-auto max-w-lg w-full bg-background-primary rounded-xl shadow-hard border border-border-light">
          <!-- Header do Modal -->
          <div class="flex items-center justify-between p-6 border-b border-border-light">
            <HeadlessDialogTitle class="text-xl font-bold text-text-primary">
              🍕 Nosso Cardápio
            </HeadlessDialogTitle>
            <button 
              @click="closeModal"
              class="text-text-secondary hover:text-text-primary transition-colors p-1 rounded-full hover:bg-neutral-100"
            >
              <BaseIcon name="close" size="md" />
            </button>
          </div>
          
          <!-- Conteúdo do Modal -->
          <div class="p-6">
            <div class="space-y-4">
              <!-- Pizza 1 -->
              <div class="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div>
                  <h3 class="font-semibold text-text-primary">Pizza Margherita</h3>
                  <p class="text-sm text-text-secondary">Mussarela, tomate e manjericão</p>
                </div>
                <span class="text-lg font-bold text-primary-600">R$ 35,90</span>
              </div>
              
              <!-- Pizza 2 -->
              <div class="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div>
                  <h3 class="font-semibold text-text-primary">Pizza Calabresa</h3>
                  <p class="text-sm text-text-secondary">Mussarela, calabresa e cebola</p>
                </div>
                <span class="text-lg font-bold text-primary-600">R$ 42,90</span>
              </div>
              
              <!-- Pizza 3 -->
              <div class="flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-200">
                <div>
                  <h3 class="font-semibold text-text-primary">Pizza Portuguesa</h3>
                  <p class="text-sm text-text-secondary">Mussarela, presunto, cebola e ovos</p>
                </div>
                <span class="text-lg font-bold text-primary-600">R$ 45,90</span>
              </div>
            </div>
            
            <!-- Botões do Modal -->
            <div class="flex gap-3 mt-6 pt-4 border-t border-border-light">
              <button 
                @click="closeModal"
                class="flex-1 bg-neutral-200 text-text-primary py-2 px-4 rounded-lg hover:bg-neutral-300 transition-colors font-medium"
              >
                Fechar
              </button>
              <button 
                class="flex-1 bg-gradient-primary text-text-inverse py-2 px-4 rounded-lg hover:shadow-primary transition-all font-medium"
              >
                Fazer Pedido
              </button>
            </div>
          </div>
        </HeadlessDialogPanel>
      </div>
    </HeadlessDialog>
  </div>
</template>

<script setup lang="ts">
// Meta tags para SEO
useHead({
  title: 'Clube Pizza - As melhores pizzas da cidade',
  meta: [
    { name: 'description', content: 'Pizzas artesanais com ingredientes frescos e entrega rápida. Peça já a sua!' }
  ]
})

// Estado do modal
const isModalOpen = ref(false)

// Funções do modal
const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>