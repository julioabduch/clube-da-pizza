import type { Database } from '~/types/database.types'

type Order = Database['public']['Tables']['pag_ordens']['Row']
type OrderInsert = Database['public']['Tables']['pag_ordens']['Insert']

export const useOrders = () => {
  const supabase = useSupabaseClient<Database>()
  const user = useSupabaseUser()
  
  // Estado reativo dos pedidos
  const orders = useState<Order[]>('user-orders', () => [])
  const loading = useState('orders-loading', () => false)
  const error = useState<string | null>('orders-error', () => null)

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

    return realUser
  }

  /**
   * Busca todos os pedidos do usuário logado
   */
  const fetchOrders = async () => {
    if (!user.value) {
      orders.value = []
      return []
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()
      
      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado')
      }

      const { data, error: fetchError } = await supabase
        .from('pag_ordens')
        .select('*')
        .eq('user_id', realUser.id)
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError

      orders.value = data || []
      console.log(`✅ ${data?.length || 0} pedidos carregados`)
      return data || []
    } catch (err: any) {
      console.error('❌ Erro ao buscar pedidos:', err)
      error.value = err.message
      return []
    } finally {
      loading.value = false
    }
  }

  /**
   * Cria novo pedido
   * @param nomeOrdem - Nome/descrição do pedido (ex: "Pizza Calabresa + Frango")
   */
  const createOrder = async (nomeOrdem: string) => {
    if (!user.value) {
      throw new Error('Usuário não autenticado')
    }

    if (!nomeOrdem || nomeOrdem.trim() === '') {
      throw new Error('Nome do pedido é obrigatório')
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()
      
      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado')
      }

      const newOrder: OrderInsert = {
        user_id: realUser.id,
        nome_ordem: nomeOrdem.trim()
      }

      const { data, error: insertError } = await supabase
        .from('pag_ordens')
        .insert(newOrder)
        .select()
        .single()

      if (insertError) throw insertError

      console.log('✅ Pedido criado:', nomeOrdem)
      
      // Atualiza lista local
      if (data) {
        orders.value = [data, ...orders.value]
      }
      
      return data
    } catch (err: any) {
      console.error('❌ Erro ao criar pedido:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Deleta um pedido
   * @param orderId - ID do pedido
   */
  const deleteOrder = async (orderId: number) => {
    if (!user.value) {
      throw new Error('Usuário não autenticado')
    }

    loading.value = true
    error.value = null

    try {
      const realUser = await getRealUser()
      
      if (!realUser?.id) {
        throw new Error('ID do usuário não encontrado')
      }

      const { error: deleteError } = await supabase
        .from('pag_ordens')
        .delete()
        .eq('id', orderId)
        .eq('user_id', realUser.id) // Segurança: só pode deletar próprios pedidos

      if (deleteError) throw deleteError

      console.log('✅ Pedido deletado')
      
      // Remove da lista local
      orders.value = orders.value.filter(order => order.id !== orderId)
      
      return true
    } catch (err: any) {
      console.error('❌ Erro ao deletar pedido:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    orders,
    loading,
    error,
    fetchOrders,
    createOrder,
    deleteOrder
  }
}
