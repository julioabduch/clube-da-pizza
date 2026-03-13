<template>
  <div class="min-h-screen bg-gradient-warm p-4">
    <div class="max-w-6xl mx-auto">
      <!-- Botão Voltar e Cabeçalho -->
      <div class="mb-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition mb-4 font-semibold"
        >
          <span>←</span>
          <span>Voltar</span>
        </NuxtLink>
        
        <!-- Aviso de Login -->
        <div v-if="!user" class="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <p class="text-blue-800 mb-3">
            ℹ️ <strong>Você precisa estar logado para assinar um plano</strong>
          </p>
          <NuxtLink
            to="/login"
            class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Fazer Login
          </NuxtLink>
        </div>

        <!-- Info de usuário logado -->
        <div v-else class="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p class="text-green-800">
            ✅ Logado como: <strong>{{ user.email }}</strong>
          </p>
        </div>
        
        <div class="text-center">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-2">Escolha seu Plano</h1>
          <p class="text-base sm:text-lg text-gray-600">
            1 pizza gigante por semana com os melhores sabores
          </p>
        </div>
      </div>

      <!-- Grid de Planos -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        <!-- Plano Clássico -->
        <div class="bg-background-primary border-2 border-border-light rounded-xl shadow-hard hover:shadow-glow transition-shadow relative p-4 sm:p-6">
          <!-- Ícone -->
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-100 flex items-center justify-center">
              <BaseIcon name="pizza" size="lg" sm:size="xl" color="primary" />
            </div>
          </div>

          <!-- Título -->
          <div class="text-center mb-4 sm:mb-6">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-2">Plano Clássico</h2>
            <p class="text-sm sm:text-base lg:text-lg text-text-secondary">
              Os sabores tradicionais que você ama
            </p>
          </div>

          <!-- Preço -->
          <div class="text-center mb-4 sm:mb-6">
            <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600">R$ 79,90</p>
            <p class="text-xs sm:text-sm text-text-tertiary">por mês</p>
          </div>

          <!-- Sabores -->
          <div class="mb-6">
            <p class="font-semibold mb-3 text-center text-text-primary">Sabores disponíveis:</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Calabresa</strong> - Mussarela e calabresa fatiada
                </span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Frango com Catupiry</strong> - Mussarela, frango e catupiry
                </span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Napolitana</strong> - Mussarela, tomate e parmesão
                </span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Portuguesa</strong> - Mussarela, presunto, cebola, azeitona e ovos
                </span>
              </li>
            </ul>
          </div>

          <!-- Badges informativos -->
          <div class="space-y-2 mb-6">
            <div class="bg-neutral-100 text-text-primary py-2 px-4 rounded-lg text-center text-sm font-medium">
              Escolha até 2 sabores por pizza
            </div>
            <div class="bg-neutral-100 text-text-primary py-2 px-4 rounded-lg text-center text-sm font-medium">
              1 pizza gigante por semana
            </div>
          </div>

          <!-- Botão de assinatura -->
          <BaseButton
            variant="primary"
            size="lg"
            class="w-full font-bold text-lg h-12"
            @click="subscribeToPlan('classico')"
          >
            Assinar Plano Clássico
          </BaseButton>
        </div>

        <!-- Plano Premium -->
        <div class="bg-background-primary border-2 border-warning rounded-xl shadow-hard hover:shadow-glow transition-shadow relative p-4 sm:p-6">
          <!-- Badge Popular -->
          <div class="absolute top-2 right-2 sm:top-4 sm:right-4">
            <div class="bg-warning text-neutral-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
              POPULAR
            </div>
          </div>

          <!-- Ícone -->
          <div class="flex justify-center mb-4">
            <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <BaseIcon name="pizza" size="lg" sm:size="xl" color="white" />
            </div>
          </div>

          <!-- Título -->
          <div class="text-center mb-4 sm:mb-6">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-2">Plano Premium</h2>
            <p class="text-sm sm:text-base lg:text-lg text-text-secondary">
              Sabores especiais + todos os clássicos
            </p>
          </div>

          <!-- Preço -->
          <div class="text-center mb-4 sm:mb-6">
            <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600">R$ 119,90</p>
            <p class="text-xs sm:text-sm text-text-tertiary">por mês</p>
          </div>

          <!-- Sabores especiais -->
          <div class="mb-6">
            <p class="font-semibold mb-3 text-center text-text-primary">Sabores especiais:</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Frango Especial</strong> - Mussarela, batata palha, frango, creme de leite e bacon
                </span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>4 Queijos com Bacon</strong> - Mussarela, provolone, parmesão, catupiry e bacon
                </span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Champignon</strong> - Mussarela e champignon
                </span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <BaseIcon name="check" size="sm" color="success" class="shrink-0 mt-0.5" />
                <span class="text-text-secondary">
                  <strong>Pizza Curitiba</strong> - Mussarela, bacon, presunto, calabresa, milho, cebola e tomate
                </span>
              </li>
            </ul>
            <p class="text-sm text-text-tertiary mt-3 text-center font-medium">
              + Todos os sabores do Plano Clássico
            </p>
          </div>

          <!-- Badges informativos -->
          <div class="space-y-2 mb-6">
            <div class="bg-neutral-100 text-text-primary py-2 px-4 rounded-lg text-center text-sm font-medium">
              Escolha até 2 sabores por pizza
            </div>
            <div class="bg-neutral-100 text-text-primary py-2 px-4 rounded-lg text-center text-sm font-medium">
              1 pizza gigante por semana
            </div>
          </div>

          <!-- Botão de assinatura -->
          <BaseButton
            variant="primary"
            size="lg"
            class="w-full font-bold text-lg h-12 !bg-gradient-primary"
            @click="subscribeToPlan('premium')"
          >
            Assinar Plano Premium
          </BaseButton>
        </div>

      </div>

      <!-- Benefícios -->
      <div class="mt-6 sm:mt-8 bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl border border-primary-200 p-4 sm:p-6 lg:p-8">
        <div class="text-center mb-6 sm:mb-8">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600">Benefícios de todos os planos</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <!-- Entrega Grátis -->
          <div class="bg-background-primary rounded-xl p-4 sm:p-6 shadow-soft border border-border-light hover:shadow-medium transition-shadow">
            <div class="flex items-center mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-success-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                <BaseIcon name="delivery" size="sm" sm:size="md" color="success" />
              </div>
              <div>
                <h4 class="font-bold text-text-primary text-base sm:text-lg">Entrega Grátis</h4>
              </div>
            </div>
            <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
              Delivery sem taxa em toda a cidade. Economize ainda mais com nossos planos!
            </p>
          </div>

          <!-- Flexibilidade -->
          <div class="bg-background-primary rounded-xl p-4 sm:p-6 shadow-soft border border-border-light hover:shadow-medium transition-shadow">
            <div class="flex items-center mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-info-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                <BaseIcon name="clock" size="sm" sm:size="md" color="info" />
              </div>
              <div>
                <h4 class="font-bold text-text-primary text-base sm:text-lg">Flexibilidade</h4>
              </div>
            </div>
            <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
              Escolha o dia da semana para receber sua pizza. Adeque ao seu cronograma!
            </p>
          </div>

          <!-- Qualidade -->
          <div class="bg-background-primary rounded-xl p-4 sm:p-6 shadow-soft border border-border-light hover:shadow-medium transition-shadow">
            <div class="flex items-center mb-3 sm:mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-warning-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                <BaseIcon name="sparkles" size="sm" sm:size="md" color="warning" />
              </div>
              <div>
                <h4 class="font-bold text-text-primary text-base sm:text-lg">Qualidade</h4>
              </div>
            </div>
            <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
              Ingredientes frescos e massa artesanal. A melhor qualidade garantida!
            </p>
          </div>
        </div>

        <!-- Chamada adicional -->
        <div class="mt-6 sm:mt-8 text-center">
          <div class="bg-primary-500 text-white rounded-lg p-3 sm:p-4 inline-block">
            <p class="font-semibold text-sm sm:text-base">
              🍕 Todas as pizzas são feitas com amor e ingredientes selecionados
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const router = useRouter()
const { subscription, fetchSubscription, createUserRecord, activateSubscription, loading } = useUserSubscription()

// Meta tags para SEO
useHead({
  title: 'Planos de Assinatura - Clube Pizza',
  meta: [
    { name: 'description', content: 'Escolha seu plano de assinatura e receba 1 pizza gigante por semana com os melhores sabores. Plano Clássico ou Premium disponíveis.' }
  ]
})

// Carrega assinatura ao montar
onMounted(async () => {
  console.log('🔍 DEBUG - User Email:', user.value?.email)
  
  if (user.value) {
    await fetchSubscription()
  }
})

// Função para assinar plano
const subscribeToPlan = async (plan: 'classico' | 'premium') => {
  console.log('🎯 Iniciando assinatura...')
  
  // Verifica se usuário está logado
  if (!user.value) {
    alert('Você precisa estar logado para assinar um plano!')
    return router.push('/login')
  }

  try {
    // Se não tem registro ainda, cria
    if (!subscription.value) {
      console.log('📝 Criando registro de usuário...')
      await createUserRecord()
    }

    // Ativa assinatura
    console.log(`🔔 Ativando plano ${plan}...`)
    await activateSubscription(plan)

    alert(`🎉 Parabéns!\n\nVocê assinou o Plano ${plan === 'classico' ? 'Clássico' : 'Premium'}!\n\n✅ Assinatura ativa\n✅ ${plan === 'premium' ? '8' : '4'} pedidos disponíveis\n✅ Válido por 30 dias\n\nRedirecionando para seu dashboard...`)
    
    router.push('/dashboard')
  } catch (error: any) {
    console.error('Erro ao assinar:', error)
    alert(`Erro ao processar assinatura: ${error.message}`)
  }
}
</script>
