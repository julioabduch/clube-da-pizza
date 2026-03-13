<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 p-4">
    <div class="max-w-6xl mx-auto">
      
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
          <div class="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">
                📋 Meus Pedidos
              </h1>
              <p class="text-gray-600 mt-1">
                Histórico completo de pedidos
              </p>
            </div>
            
            <NuxtLink
              v-if="canCreateOrder"
              to="/pedidos/novo"
              class="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              + Novo Pedido
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="bg-white rounded-xl shadow-2xl p-12 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Carregando pedidos...</p>
      </div>

      <!-- Sem pedidos -->
      <div v-else-if="orders.length === 0" class="bg-white rounded-xl shadow-2xl p-12 text-center">
        <div class="text-6xl mb-4">🍕</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Você ainda não tem pedidos
        </h2>
        <p class="text-gray-600 mb-6">
          Crie seu primeiro pedido e comece a aproveitar pizzas deliciosas!
        </p>
        <NuxtLink
          v-if="canCreateOrder"
          to="/pedidos/novo"
          class="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
        >
          Criar Primeiro Pedido
        </NuxtLink>
        <div v-else class="text-gray-500">
          <p>Você atingiu o limite de pedidos do seu plano.</p>
          <NuxtLink to="/planos" class="text-orange-600 hover:underline">
            Ver planos disponíveis
          </NuxtLink>
        </div>
      </div>

      <!-- Lista de Pedidos -->
      <div v-else class="space-y-4">
        
        <!-- Card de pedido -->
        <div
          v-for="order in orders"
          :key="order.id"
          class="bg-white rounded-xl shadow-2xl p-6"
        >
          <div class="flex justify-between items-start gap-4 flex-wrap">
            <div class="flex-1">
              <div class="flex items-start gap-3 mb-2">
                <span class="text-3xl">🍕</span>
                <div>
                  <h3 class="font-bold text-lg text-gray-900">
                    {{ order.nome_ordem }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    Pedido #{{ order.id }} • {{ formatDate(order.created_at) }}
                  </p>
                </div>
              </div>
            </div>
            
            <button
              @click="handleDeleteOrder(order.id)"
              :disabled="loading"
              class="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 disabled:opacity-50 transition text-sm"
            >
              🗑️ Excluir
            </button>
          </div>
        </div>

        <!-- Info de limite -->
        <div class="bg-white rounded-xl shadow-2xl p-6">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p class="text-gray-600">
                Total de pedidos criados: <strong class="text-gray-900">{{ orders.length }}</strong>
              </p>
              <p class="text-gray-600">
                Pedidos restantes no período: <strong class="text-gray-900">{{ remainingOrders }}</strong>
              </p>
            </div>
            
            <NuxtLink
              v-if="remainingOrders === 0"
              to="/planos"
              class="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Fazer Upgrade
            </NuxtLink>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const { orders, fetchOrders, deleteOrder, loading } = useOrders()
const { canCreateOrder, remainingOrders } = useUserSubscription()

// Proteção de rota
watch(user, () => {
  if (!user.value) {
    navigateTo('/login')
  }
}, { immediate: true })

// Carrega pedidos ao montar
onMounted(async () => {
  if (user.value) {
    await fetchOrders()
  }
})

// Deletar pedido
const handleDeleteOrder = async (orderId: number) => {
  if (!confirm('Tem certeza que deseja excluir este pedido?')) {
    return
  }

  try {
    await deleteOrder(orderId)
    alert('✅ Pedido excluído com sucesso!')
  } catch (error: any) {
    alert(`Erro ao excluir pedido: ${error.message}`)
  }
}

// Formata data
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>
