<template>
  <div class="min-h-screen bg-gradient-warm p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <header class="mb-6 sm:mb-8">
        <BaseButton
          variant="outline"
          size="sm"
          class="mb-4"
          @click="$router.back()"
        >
          <BaseIcon name="arrow-left" size="sm" class="mr-2" />
          Voltar
        </BaseButton>
        
        <div class="text-center">
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-error-600 mb-2">
            Monte sua Pizza
          </h1>
          <div class="inline-flex items-center bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
            Plano Premium
          </div>
          <p class="text-base sm:text-lg text-text-secondary">
            Escolha até 2 sabores para sua pizza gigante
          </p>
        </div>
      </header>

      <!-- Progress indicator -->
      <div class="mb-6 sm:mb-8">
        <div class="bg-background-primary rounded-lg p-4 border border-border-light">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-text-secondary">Progresso da Seleção</span>
            <span class="text-sm font-medium text-primary-600">
              {{ selectedFlavors.length }}/2 sabores selecionados
            </span>
          </div>
          <div class="w-full bg-neutral-200 rounded-full h-2">
            <div 
              class="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              :style="{ width: (selectedFlavors.length / 2) * 100 + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Sabores selecionados -->
      <div v-if="selectedFlavors.length > 0" class="mb-6 sm:mb-8">
        <h3 class="text-lg font-semibold text-text-primary mb-3">Sabores Selecionados:</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div 
            v-for="flavor in selectedFlavors" 
            :key="flavor.id"
            class="bg-primary-50 border border-primary-200 rounded-lg p-3 flex items-center justify-between"
          >
            <div>
              <span class="font-medium text-primary-700">{{ flavor.name }}</span>
              <p class="text-sm text-primary-600">{{ flavor.description }}</p>
            </div>
            <BaseButton
              variant="ghost"
              size="sm"
              @click="removeFlavor(flavor.id)"
              class="text-primary-600 hover:bg-primary-100"
            >
              <BaseIcon name="close" size="sm" />
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Sabores Disponíveis -->
      <div class="bg-background-primary rounded-xl shadow-medium border border-border-light p-4 sm:p-6 mb-6 sm:mb-8">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-lg sm:text-xl font-bold text-text-primary">
            Sabores Disponíveis
          </h3>
          <div v-if="selectedFlavors.length >= 2" class="text-xs text-warning-600 font-medium">
            Máximo atingido
          </div>
        </div>
        <p class="text-sm text-text-secondary mb-4">
          Selecione 1 ou 2 sabores para sua pizza desta semana
        </p>

        <!-- Grid de sabores em 2 colunas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          <!-- Sabores Clássicos (Primeira Coluna) -->
          <div 
            v-for="flavor in classicoFlavors" 
            :key="flavor.id"
            @click="selectFlavor(flavor)"
            class="border rounded-lg p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:shadow-medium bg-white relative"
            :class="[
              isFlavorSelected(flavor.id) 
                ? 'border-primary-500 bg-primary-50 shadow-medium' 
                : 'border-neutral-200 hover:border-primary-300',
              !canSelectMore && !isFlavorSelected(flavor.id) 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            ]"
          >
            <!-- Indicador de seleção -->
            <div 
              v-if="isFlavorSelected(flavor.id)"
              class="absolute top-2 right-2 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold"
            >
              {{ getFlavorNumber(flavor.id) }}
            </div>
            
            <div>
              <h4 class="font-bold text-text-primary text-base">{{ flavor.name }}</h4>
              <p class="text-sm text-text-secondary mt-1">{{ flavor.description }}</p>
            </div>
          </div>

          <!-- Sabores Premium (Segunda Coluna) -->
          <div 
            v-for="flavor in premiumFlavors" 
            :key="flavor.id"
            @click="selectFlavor(flavor)"
            class="border rounded-lg p-3 sm:p-4 cursor-pointer transition-all duration-200 hover:shadow-medium bg-white relative"
            :class="[
              isFlavorSelected(flavor.id) 
                ? 'border-primary-500 bg-primary-50 shadow-medium' 
                : 'border-neutral-200 hover:border-primary-300',
              !canSelectMore && !isFlavorSelected(flavor.id) 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            ]"
          >
            <!-- Badge Premium -->
            <div class="absolute top-2 left-2">
              <span class="bg-gradient-primary text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-sm">
                Premium
              </span>
            </div>
            
            <!-- Indicador de seleção -->
            <div 
              v-if="isFlavorSelected(flavor.id)"
              class="absolute top-2 right-2 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold"
            >
              {{ getFlavorNumber(flavor.id) }}
            </div>
            
            <div class="mt-6">
              <h4 class="font-bold text-text-primary text-base">{{ flavor.name }}</h4>
              <p class="text-sm text-text-secondary mt-1">{{ flavor.description }}</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Campo de Observações -->
      <div class="bg-background-primary rounded-xl shadow-medium border border-border-light p-4 sm:p-6 mb-6 sm:mb-8">
        <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-3">
          Observações
        </h3>
        <p class="text-sm text-text-secondary mb-4">
          Adicione observações sobre seu pedido (opcional)
        </p>
        
        <textarea
          v-model="observations"
          placeholder="Ex: sem cebola, bem assada, borda recheada..."
          rows="3"
          maxlength="200"
          class="w-full px-4 py-3 border border-neutral-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm"
        ></textarea>
        
        <div class="flex justify-between items-center mt-2">
          <span class="text-xs text-text-tertiary">
            {{ observations.length }}/200 caracteres
          </span>
        </div>
      </div>

      <!-- Resumo do Pedido -->
      <div v-if="selectedFlavors.length > 0" class="bg-background-primary rounded-xl shadow-medium border border-border-light p-4 sm:p-6 mb-6 sm:mb-8">
        <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-4">
          Resumo do Pedido:
        </h3>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="flavor in selectedFlavors" 
            :key="flavor.id"
            class="bg-warning text-neutral-800 px-3 py-1 rounded-full text-sm font-bold"
          >
            {{ flavor.name }}
          </span>
        </div>
        
        <div v-if="observations.trim()" class="text-sm text-text-secondary">
          <strong>Observações:</strong> {{ observations }}
        </div>
      </div>

      <!-- Botão finalizar pedido -->
      <div class="mt-8 sm:mt-12 sticky bottom-4">
        <BaseButton
          variant="primary"
          size="lg"
          class="w-full !bg-error-600 hover:!bg-error-700 font-bold text-lg h-12 sm:h-14 text-white"
          @click="finishOrder"
          :disabled="selectedFlavors.length === 0"
        >
          <BaseIcon name="check" size="md" color="white" class="mr-3" />
          Confirmar Pedido
        </BaseButton>
      </div>

    </div>

    <!-- Modal de Pedido Confirmado -->
    <HeadlessDialog :open="showConfirmationModal" @close="closeModal" class="relative z-50">
      <div class="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm" aria-hidden="true" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <HeadlessDialogPanel class="mx-auto max-w-md w-full bg-background-primary rounded-xl shadow-hard border border-border-light p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          
          <!-- Ícone de sucesso -->
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center">
              <BaseIcon name="check" size="xl" color="success" />
            </div>
          </div>

          <!-- Título -->
          <HeadlessDialogTitle class="text-xl sm:text-2xl font-bold text-success-600 text-center mb-2">
            Pedido Confirmado!
          </HeadlessDialogTitle>
          
          <!-- Subtítulo -->
          <p class="text-text-secondary text-center mb-6">
            Seu pedido foi registrado com sucesso 🍕
          </p>

          <!-- Informações do pedido -->
          <div class="space-y-4 mb-6">
            
            <!-- Código do pedido -->
            <div>
              <h4 class="text-sm font-medium text-text-secondary mb-1">Código do Pedido</h4>
              <p class="text-xl font-bold text-error-600">{{ orderCode }}</p>
            </div>

            <!-- Sabores escolhidos -->
            <div>
              <h4 class="text-sm font-medium text-text-secondary mb-2">Sabores Escolhidos</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="flavor in selectedFlavors" 
                  :key="flavor.id"
                  class="bg-error-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                >
                  {{ flavor.name }}
                </span>
              </div>
            </div>

            <!-- Data do pedido -->
            <div>
              <h4 class="text-sm font-medium text-text-secondary mb-1">Data do Pedido</h4>
              <p class="text-text-primary font-medium">{{ formatDate(new Date()) }}</p>
            </div>

            <!-- Status -->
            <div>
              <h4 class="text-sm font-medium text-text-secondary mb-1">Status</h4>
              <p class="text-text-primary font-medium">Aguardando confirmação da pizzaria</p>
            </div>

          </div>

          <!-- Pergunta adicional -->
          <div class="bg-neutral-50 rounded-lg p-4 mb-6 text-center">
            <p class="text-text-primary font-medium mb-4">
              Deseja adicionar bebidas ou pizzas fora do plano?
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <BaseButton
                variant="primary"
                size="md"
                class="!bg-success-600 hover:!bg-success-700 w-full"
                @click="goToWhatsApp"
              >
                <BaseIcon name="chat" size="sm" class="mr-2" />
                Ir para o WhatsApp
              </BaseButton>
              
              <BaseButton
                variant="outline"
                size="md"
                class="w-full"
                @click="goToDashboard"
              >
                <BaseIcon name="home" size="sm" class="mr-2" />
                Voltar ao Início
              </BaseButton>
            </div>
          </div>

          <!-- Informação adicional -->
          <div class="text-center">
            <p class="text-xs text-text-tertiary">
              A pizzaria receberá sua confirmação e entrará em contato em breve. Você pode acompanhar o status do seu pedido no painel inicial.
            </p>
          </div>

        </HeadlessDialogPanel>
      </div>
    </HeadlessDialog>
  </div>
</template>

<script setup lang="ts">
// Proteger página com autenticação (temporariamente desabilitado)
// definePageMeta({
//   middleware: 'auth'
// })

// Meta tags para SEO
useHead({
  title: 'Escolher Sabores - Clube Pizza',
  meta: [
    { name: 'description', content: 'Escolha até 2 sabores para sua pizza da semana no Clube Pizza' }
  ]
})

interface Flavor {
  id: string
  name: string
  description: string
}

// Estados reativos
const userPlan = ref<'classico' | 'premium'>('premium') // Em produção, pegar do usuário logado
const selectedFlavors = ref<Flavor[]>([])
const observations = ref('')
const showConfirmationModal = ref(false)
const orderCode = ref('')

// Dados dos sabores
const premiumFlavors: Flavor[] = [
  {
    id: 'frango-especial',
    name: 'Frango Especial',
    description: 'Mussarela, batata palha, frango, creme de leite e bacon'
  },
  {
    id: '4-queijos-bacon',
    name: '4 Queijos com Bacon',
    description: 'Mussarela, provolone, parmesão, catupiry e bacon'
  },
  {
    id: 'champignon',
    name: 'Champignon',
    description: 'Mussarela e champignon'
  },
  {
    id: 'pizza-curitiba',
    name: 'Pizza Curitiba',
    description: 'Mussarela, bacon, presunto, calabresa, milho, cebola e tomate'
  }
]

const classicoFlavors: Flavor[] = [
  {
    id: 'calabresa',
    name: 'Calabresa',
    description: 'Mussarela e calabresa fatiada'
  },
  {
    id: 'frango-catupiry',
    name: 'Frango com Catupiry',
    description: 'Mussarela, frango e catupiry'
  },
  {
    id: 'napolitana',
    name: 'Napolitana',
    description: 'Mussarela, tomate e parmesão'
  },
  {
    id: 'portuguesa',
    name: 'Portuguesa',
    description: 'Mussarela, presunto, cebola, azeitona e ovos'
  }
]

// Computed properties
const canSelectMore = computed(() => selectedFlavors.value.length < 2)

// Métodos
const isFlavorSelected = (flavorId: string): boolean => {
  return selectedFlavors.value.some(f => f.id === flavorId)
}

const getFlavorNumber = (flavorId: string): string => {
  const index = selectedFlavors.value.findIndex(f => f.id === flavorId)
  return index !== -1 ? String(index + 1) : ''
}

const selectFlavor = (flavor: Flavor) => {
  if (isFlavorSelected(flavor.id)) {
    removeFlavor(flavor.id)
    return
  }
  
  if (!canSelectMore.value) {
    // Usar uma notificação mais suave em vez de alert
    console.log('Máximo de 2 sabores atingido')
    return
  }
  
  selectedFlavors.value.push(flavor)
}

const removeFlavor = (flavorId: string) => {
  selectedFlavors.value = selectedFlavors.value.filter(f => f.id !== flavorId)
}

const generateOrderCode = (): string => {
  const numbers = '0123456789'
  let code = 'CP'
  
  // CP + 4 números (ex: CP0123)
  for (let i = 0; i < 4; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length))
  }
  
  return code
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }) + ' às ' + date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const closeModal = () => {
  showConfirmationModal.value = false
}

const goToWhatsApp = () => {
  const flavorNames = selectedFlavors.value.map(f => f.name).join(' + ')
  const obsText = observations.value.trim() ? `\nObservações: ${observations.value}` : ''
  const message = `Olá! Gostaria de adicionar bebidas ou pizzas extras ao meu pedido:\n\nCódigo: ${orderCode.value}\nPizza: ${flavorNames}${obsText}`
  
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
  
  closeModal()
  navigateTo('/dashboard')
}

const goToDashboard = () => {
  closeModal()
  navigateTo('/dashboard')
}

const finishOrder = () => {
  if (selectedFlavors.value.length === 0) {
    alert('Selecione pelo menos 1 sabor para continuar.')
    return
  }
  
  // Gerar código do pedido
  orderCode.value = generateOrderCode()
  
  // Mostrar modal de confirmação
  showConfirmationModal.value = true
}

// Simular recebimento dos dados do plano do usuário
onMounted(() => {
  // Em produção, buscar plano do usuário do banco de dados
  console.log('Página de seleção de sabores carregada para plano:', userPlan.value)
})
</script>
