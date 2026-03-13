<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-500 to-orange-600 p-4">
    <div class="max-w-6xl mx-auto">
      
      <!-- Header -->
      <div class="bg-white rounded-xl shadow-2xl p-6 mb-6">
        <div class="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p class="text-gray-600 mt-1">
              Bem-vindo, {{ user?.email }}
            </p>
          </div>
          
          <button
            @click="handleLogout"
            class="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Sair
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loadingSubscription" class="bg-white rounded-xl shadow-2xl p-12 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Carregando informações...</p>
      </div>

      <!-- Sem Assinatura -->
      <div v-else-if="!subscription" class="bg-white rounded-xl shadow-2xl p-8 mb-6 text-center">
        <div class="text-6xl mb-4">🍕</div>
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Você ainda não tem uma assinatura
        </h2>
        <p class="text-gray-600 mb-6">
          Assine um de nossos planos e comece a receber pizzas deliciosas toda semana!
        </p>
        <NuxtLink
          to="/planos"
          class="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
        >
          Ver Planos Disponíveis
        </NuxtLink>
      </div>

      <!-- Com Assinatura -->
      <template v-else>
        
        <!-- Status da Assinatura -->
        <div class="bg-white rounded-xl shadow-2xl p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">
            Status da Assinatura
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Status -->
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-gray-600 text-sm mb-1">Status</p>
              <p class="text-lg font-bold" :class="getStatusColor(subscription.status)">
                {{ getStatusLabel(subscription.status) }}
              </p>
            </div>

            <!-- Ordens Disponíveis -->
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-gray-600 text-sm mb-1">Pedidos Disponíveis</p>
              <p class="text-lg font-bold text-gray-900">
                {{ remainingOrders }} de {{ subscription.ordens_limite }}
              </p>
            </div>

            <!-- Data de Vencimento -->
            <div class="bg-gray-50 rounded-lg p-4" v-if="subscription.data_vencimento">
              <p class="text-gray-600 text-sm mb-1">Próximo Vencimento</p>
              <p class="text-lg font-bold text-gray-900">
                {{ formatDate(subscription.data_vencimento) }}
              </p>
            </div>

            <!-- Trial -->
            <div class="bg-gray-50 rounded-lg p-4" v-else>
              <p class="text-gray-600 text-sm mb-1">Trial Expira em</p>
              <p class="text-lg font-bold text-gray-900">
                {{ formatDate(subscription.data_expiracao) }}
              </p>
            </div>

            <!-- Tipo de Plano -->
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-gray-600 text-sm mb-1">Plano</p>
              <p class="text-lg font-bold text-gray-900">
                {{ subscription.subscription_id ? (subscription.ordens_limite > 5 ? 'Premium' : 'Clássico') : 'Trial' }}
              </p>
            </div>
          </div>

          <!-- Avisos -->
          <div v-if="subscription.status === 'trial'" class="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p class="text-blue-800">
              ℹ️ Você está no período de teste. Assine um plano para continuar recebendo pizzas!
            </p>
          </div>
          
          <div v-if="subscription.status === 'atrasada'" class="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p class="text-yellow-800">
              ⚠️ Seu pagamento está atrasado. Regularize para continuar criando pedidos.
            </p>
          </div>
          
          <div v-if="subscription.status === 'cancelada'" class="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-red-800">
              ❌ Sua assinatura foi cancelada por falta de pagamento. Assine novamente para continuar.
            </p>
          </div>
        </div>

        <!-- Ações Rápidas -->
        <div class="bg-white rounded-xl shadow-2xl p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-900 mb-4">
            Ações Rápidas
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NuxtLink
              v-if="canCreateOrder"
              to="/pedidos/novo"
              class="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition text-center shadow-lg"
            >
              <div class="text-4xl mb-2">🍕</div>
              <div class="font-bold text-lg">Fazer Novo Pedido</div>
              <div class="text-sm opacity-90 mt-1">{{ remainingOrders }} disponíveis</div>
            </NuxtLink>

            <button
              v-else
              disabled
              class="p-6 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed text-center"
            >
              <div class="text-4xl mb-2 opacity-50">🍕</div>
              <div class="font-bold text-lg">Novo Pedido</div>
              <div class="text-sm mt-1">Limite atingido</div>
            </button>
            
            <NuxtLink
              to="/pedidos"
              class="p-6 border-2 border-gray-300 rounded-lg hover:border-orange-500 transition text-center"
            >
              <div class="text-4xl mb-2">📋</div>
              <div class="font-bold text-lg text-gray-900">Meus Pedidos</div>
              <div class="text-sm text-gray-600 mt-1">{{ subscription.ordens_criadas }} pedidos</div>
            </NuxtLink>
            
            <NuxtLink
              to="/planos"
              class="p-6 border-2 border-gray-300 rounded-lg hover:border-orange-500 transition text-center"
            >
              <div class="text-4xl mb-2">⭐</div>
              <div class="font-bold text-lg text-gray-900">Mudar Plano</div>
              <div class="text-sm text-gray-600 mt-1">Ver opções</div>
            </NuxtLink>
          </div>
        </div>

      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { SubscriptionStatus } from '~/types/database.types'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const { subscription, fetchSubscription, remainingOrders, canCreateOrder, loading: loadingSubscription } = useUserSubscription()

// Watch user - padrão do guia Supabase para proteção de rota
watch(user, () => {
  if (!user.value) {
    console.log('❌ Usuário não autenticado, redirecionando...')
    navigateTo('/login')
  } else {
    console.log('✅ Usuário autenticado:', user.value.email)
  }
}, { immediate: true })

// Carrega dados ao montar
onMounted(async () => {
  if (user.value) {
    await fetchSubscription()
  }
})

// Logout
const handleLogout = async () => {
  try {
    await supabase.auth.signOut()
    console.log('✅ Logout realizado')
    // O watcher vai detectar user = null e redirecionar
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
  }
}

// Helpers
const getStatusLabel = (status: SubscriptionStatus) => {
  const labels = {
    trial: '🔵 Trial',
    ativa: '✅ Ativa',
    atrasada: '⚠️ Atrasada',
    cancelada: '❌ Cancelada',
    pendente: '⏸️ Pendente'
  }
  return labels[status] || status
}

const getStatusColor = (status: SubscriptionStatus) => {
  const colors = {
    trial: 'text-blue-600',
    ativa: 'text-green-600',
    atrasada: 'text-yellow-600',
    cancelada: 'text-red-600',
    pendente: 'text-gray-600'
  }
  return colors[status] || 'text-gray-600'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}
</script>

