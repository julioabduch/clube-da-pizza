import type { Database } from '~/types/database.types'

type UserSubscription = Database['public']['Views']['pag_usuarios_view']['Row']
type PagUsuarioInsert = Database['public']['Tables']['pag_usuarios']['Insert']
type PagUsuarioUpdate = Database['public']['Tables']['pag_usuarios']['Update']

export const useUserSubscription = () => {
  const supabase = useSupabaseClient<Database>()
  const user = useSupabaseUser()

  const subscription = useState<UserSubscription | null>('user-subscription', () => null)
  const loading = useState('subscription-loading', () => false)
  const error = useState<string | null>('subscription-error', () => null)

  const getRealUser = async () => {
    const { data: { user: realUser }, error } = await supabase.auth.getUser()

    if (error) {
      console.error('❌ Erro ao buscar usuário real:', error)
      return null
    }

    if (!realUser) {
      console.error('❌ Usuário não autenticado')
      return null
    }

    console.log('✅ Usuário real:', {
      id: realUser.id,
      email: realUser.email
    })

    return realUser
  }

  const fetchSubscription = async () => {
    if (!user.value) {
      subscription.value = null
      return null
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()

      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado')
      }

      const { data, error: fetchError } = await supabase
        .from('pag_usuarios_view')
        .select('*')
        .eq('user_id', realUser.id)
        .maybeSingle()

      if (fetchError) {
        throw fetchError
      }

      if (!data) {
        console.log('📋 Usuário ainda sem registro em pag_usuarios')
        subscription.value = null
        return null
      }

      subscription.value = data
      console.log('✅ Assinatura carregada:', data.status)
      return data
    } catch (err: any) {
      console.error('❌ Erro ao buscar assinatura:', err)
      error.value = err.message || 'Erro ao buscar assinatura'
      return null
    } finally {
      loading.value = false
    }
  }

  const createUserRecord = async () => {
    if (!user.value) {
      throw new Error('Usuário não autenticado')
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()

      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado. Faça login novamente.')
      }

      if (!realUser.email) {
        throw new Error('Email do usuário não encontrado.')
      }

      console.log('📝 Criando registro inicial:', {
        user_id: realUser.id,
        email: realUser.email
      })

      const newUser: PagUsuarioInsert = {
        user_id: realUser.id,
        email: realUser.email,
        ordens_limite: 5
      }

      const { data, error: insertError } = await supabase
        .from('pag_usuarios')
        .insert(newUser)
        .select()
        .single()

      if (insertError) {
        throw insertError
      }

      console.log('✅ Registro inicial criado com sucesso')
      await fetchSubscription()
      return data
    } catch (err: any) {
      console.error('❌ Erro ao criar registro inicial:', err)
      error.value = err.message || 'Erro ao criar registro'
      throw err
    } finally {
      loading.value = false
    }
  }

  const activateSubscription = async (plan: 'classico' | 'premium') => {
    if (!user.value) {
      throw new Error('Usuário não autenticado')
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()

      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado. Faça login novamente.')
      }

      console.log('🔔 Ativando assinatura:', {
        user_id: realUser.id,
        email: realUser.email,
        plan
      })

      const { data: existingUser, error: existingUserError } = await supabase
        .from('pag_usuarios')
        .select('id')
        .eq('user_id', realUser.id)
        .maybeSingle()

      if (existingUserError) {
        throw existingUserError
      }

      if (!existingUser) {
        console.log('📋 Usuário sem registro, criando antes de ativar assinatura...')
        await createUserRecord()
      }

      const ordensLimite = plan === 'premium' ? 8 : 4
      const dataVencimento = new Date()
      dataVencimento.setDate(dataVencimento.getDate() + 30)

      const updateData: PagUsuarioUpdate = {
        subscription_id: `sub_sim_${plan}_${Date.now()}`,
        data_vencimento: dataVencimento.toISOString(),
        ordens_limite: ordensLimite
      }

      console.log('📦 Dados do update:', updateData)

      const { data, error: updateError } = await supabase
        .from('pag_usuarios')
        .update(updateData)
        .eq('user_id', realUser.id)
        .select()
        .single()

      if (updateError) {
        throw updateError
      }

      console.log(`✅ Assinatura ${plan} ativada com sucesso`)
      await fetchSubscription()
      return data
    } catch (err: any) {
      console.error('❌ Erro ao ativar assinatura:', err)
      error.value = err.message || 'Erro ao ativar assinatura'
      throw err
    } finally {
      loading.value = false
    }
  }

  const cancelSubscription = async () => {
    if (!user.value) {
      throw new Error('Usuário não autenticado')
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()

      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado. Faça login novamente.')
      }

      const { data, error: updateError } = await supabase
        .from('pag_usuarios')
        .update({
          subscription_id: null,
          data_vencimento: null
        })
        .eq('user_id', realUser.id)
        .select()
        .single()

      if (updateError) {
        throw updateError
      }

      console.log('✅ Assinatura cancelada')
      await fetchSubscription()
      return data
    } catch (err: any) {
      console.error('❌ Erro ao cancelar assinatura:', err)
      error.value = err.message || 'Erro ao cancelar assinatura'
      throw err
    } finally {
      loading.value = false
    }
  }

  const canCreateOrder = computed(() => {
    if (!subscription.value) return false

    const { status, ordens_criadas, ordens_limite } = subscription.value

    if (status !== 'trial' && status !== 'ativa') return false

    return ordens_criadas < ordens_limite
  })

  const remainingOrders = computed(() => {
    if (!subscription.value) return 0
    return Math.max(0, subscription.value.ordens_limite - subscription.value.ordens_criadas)
  })

  return {
    subscription,
    loading,
    error,
    fetchSubscription,
    createUserRecord,
    activateSubscription,
    cancelSubscription,
    canCreateOrder,
    remainingOrders
  }
}
