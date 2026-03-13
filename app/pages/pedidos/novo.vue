<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 p-4">
    <div class="max-w-4xl mx-auto">
      
      <!-- Header -->
      <div class="mb-6">
        <NuxtLink
          to="/dashboard"
          class="inline-flex items-center gap-2 text-white hover:text-white/80 transition mb-4"
        >
          <span>←</span>
          <span>Voltar ao Dashboard</span>
        </NuxtLink>
        
        <div class="bg-white rounded-xl shadow-2xl p-6">
          <h1 class="text-2xl font-bold text-gray-900">
            🍕 Criar Novo Pedido
          </h1>
          <p class="text-gray-600 mt-1">
            Escolha até 2 sabores para sua pizza gigante
          </p>
        </div>
      </div>

      <!-- Verificação de disponibilidade -->
      <div v-if="!canCreateOrder" class="bg-white rounded-xl shadow-2xl p-8 text-center">
        <div class="text-6xl mb-4">⚠️</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Você atingiu o limite de pedidos
        </h2>
        <p class="text-gray-600 mb-6">
          Faça upgrade do seu plano ou aguarde a renovação para criar mais pedidos.
        </p>
        <NuxtLink
          to="/planos"
          class="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
        >
          Ver Planos
        </NuxtLink>
      </div>

      <!-- Formulário de Pedido -->
      <div v-else class="bg-white rounded-xl shadow-2xl p-6">
        
        <!-- Sabores Disponíveis -->
        <div class="mb-6">
          <h3 class="font-bold text-lg text-gray-900 mb-4">Selecione os sabores (máximo 2)</h3>
          
          <div class="grid md:grid-cols-2 gap-4">
            <label
              v-for="sabor in saboresDisponiveis"
              :key="sabor.id"
              class="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition"
              :class="selectedFlavors.includes(sabor.id) 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-200 hover:border-orange-300'"
            >
              <input
                type="checkbox"
                :value="sabor.id"
                v-model="selectedFlavors"
                :disabled="selectedFlavors.length >= 2 && !selectedFlavors.includes(sabor.id)"
                class="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
              />
              <div>
                <p class="font-bold text-gray-900">{{ sabor.nome }}</p>
                <p class="text-sm text-gray-600">{{ sabor.ingredientes }}</p>
                <p v-if="sabor.premium" class="text-xs text-orange-600 font-semibold mt-1">⭐ Premium</p>
              </div>
            </label>
          </div>
        </div>

        <!-- Resumo -->
        <div v-if="selectedFlavors.length > 0" class="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Resumo do Pedido:</h4>
          <p class="text-gray-700">
            {{ getOrderSummary() }}
          </p>
        </div>

        <!-- Observações -->
        <div class="mb-6">
          <label class="block font-bold text-gray-900 mb-2">
            Observações (opcional)
          </label>
          <textarea
            v-model="observacoes"
            placeholder="Ex: Sem cebola, bem assada, etc."
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          ></textarea>
        </div>

        <!-- Botões -->
        <div class="flex gap-4">
          <button
            @click="handleCreateOrder"
            :disabled="selectedFlavors.length === 0 || loading"
            class="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {{ loading ? 'Criando...' : 'Criar Pedido' }}
          </button>
          
          <NuxtLink
            to="/dashboard"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition"
          >
            Cancelar
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const user = useSupabaseUser()
const { subscription, canCreateOrder, remainingOrders } = useUserSubscription()
const { createOrder, loading } = useOrders()

// Proteção de rota
watch(user, () => {
  if (!user.value) {
    navigateTo('/login')
  }
}, { immediate: true })

// Estado do formulário
const selectedFlavors = ref<string[]>([])
const observacoes = ref('')

// Sabores disponíveis
const saboresDisponiveis = [
  { id: 'calabresa', nome: 'Calabresa', ingredientes: 'Mussarela e calabresa fatiada', premium: false },
  { id: 'frango-catupiry', nome: 'Frango com Catupiry', ingredientes: 'Mussarela, frango e catupiry', premium: false },
  { id: 'napolitana', nome: 'Napolitana', ingredientes: 'Mussarela, tomate e parmesão', premium: false },
  { id: 'portuguesa', nome: 'Portuguesa', ingredientes: 'Mussarela, presunto, cebola, azeitona e ovos', premium: false },
  { id: 'frango-especial', nome: 'Frango Especial', ingredientes: 'Mussarela, batata palha, frango, creme de leite e bacon', premium: true },
  { id: '4-queijos-bacon', nome: '4 Queijos com Bacon', ingredientes: 'Mussarela, provolone, parmesão, catupiry e bacon', premium: true },
  { id: 'champignon', nome: 'Champignon', ingredientes: 'Mussarela e champignon', premium: true },
  { id: 'curitiba', nome: 'Pizza Curitiba', ingredientes: 'Mussarela, bacon, presunto, calabresa, milho, cebola e tomate', premium: true }
]

// Gera resumo do pedido
const getOrderSummary = () => {
  const selected = saboresDisponiveis.filter(s => selectedFlavors.value.includes(s.id))
  const names = selected.map(s => s.nome)
  
  if (names.length === 1) {
    return `Pizza gigante de ${names[0]}`
  } else if (names.length === 2) {
    return `Pizza gigante meio a meio: ${names[0]} + ${names[1]}`
  }
  return ''
}

// Criar pedido
const handleCreateOrder = async () => {
  if (selectedFlavors.value.length === 0) {
    alert('Selecione pelo menos um sabor!')
    return
  }

  if (!canCreateOrder.value) {
    alert('Você atingiu o limite de pedidos do seu plano!')
    return
  }

  try {
    const orderName = getOrderSummary()
    const fullOrder = observacoes.value 
      ? `${orderName} - Obs: ${observacoes.value}` 
      : orderName

    await createOrder(fullOrder)

    alert('✅ Pedido criado com sucesso!\n\nSua pizza será preparada e entregue em breve.')
    router.push('/dashboard')
  } catch (error: any) {
    alert(`Erro ao criar pedido: ${error.message}`)
  }
}
</script>
