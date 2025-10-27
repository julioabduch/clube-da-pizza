import { useToast } from 'vue-toastification'

/**
 * Composable para usar notificações toast no Clube Pizza
 * Integrado ao sistema de cores e padrões da aplicação
 */
export const useNotification = () => {
  const toast = useToast()

  /**
   * Mostra uma notificação de sucesso
   * @param message Mensagem a ser exibida
   * @param options Opções customizadas (opcional)
   */
  const success = (message: string, options?: any) => {
    toast.success(message, {
      // Configurações específicas para sucesso
      timeout: 4000,
      ...options
    })
  }

  /**
   * Mostra uma notificação de erro
   * @param message Mensagem a ser exibida
   * @param options Opções customizadas (opcional)
   */
  const error = (message: string, options?: any) => {
    toast.error(message, {
      // Configurações específicas para erro
      timeout: 0, // Não remove automaticamente
      ...options
    })
  }

  /**
   * Mostra uma notificação de aviso
   * @param message Mensagem a ser exibida
   * @param options Opções customizadas (opcional)
   */
  const warning = (message: string, options?: any) => {
    toast.warning(message, {
      // Configurações específicas para aviso
      timeout: 6000,
      ...options
    })
  }

  /**
   * Mostra uma notificação de informação
   * @param message Mensagem a ser exibida
   * @param options Opções customizadas (opcional)
   */
  const info = (message: string, options?: any) => {
    toast.info(message, {
      // Configurações específicas para info
      timeout: 5000,
      ...options
    })
  }

  /**
   * Mostra uma notificação padrão
   * @param message Mensagem a ser exibida
   * @param options Opções customizadas (opcional)
   */
  const show = (message: string, options?: any) => {
    toast(message, options)
  }

  /**
   * Remove todos os toasts
   */
  const clear = () => {
    toast.clear()
  }

  /**
   * Notificações específicas do Clube Pizza
   */
  
  /**
   * Notificação de pedido realizado com sucesso
   */
  const pedidoRealizado = (numeroPedido?: string) => {
    success(
      `🍕 Pedido ${numeroPedido ? `#${numeroPedido}` : ''} realizado com sucesso!`,
      { timeout: 6000 }
    )
  }

  /**
   * Notificação de item adicionado ao carrinho
   */
  const itemAdicionado = (nomeItem: string) => {
    success(`${nomeItem} adicionado ao carrinho!`, { timeout: 3000 })
  }

  /**
   * Notificação de item removido do carrinho
   */
  const itemRemovido = (nomeItem: string) => {
    info(`${nomeItem} removido do carrinho`, { timeout: 3000 })
  }

  /**
   * Notificação de erro de conexão
   */
  const erroConexao = () => {
    error('Erro de conexão. Verifique sua internet e tente novamente.')
  }

  /**
   * Notificação de campos obrigatórios
   */
  const camposObrigatorios = () => {
    warning('Por favor, preencha todos os campos obrigatórios.')
  }

  /**
   * Notificação de login necessário
   */
  const loginNecessario = () => {
    warning('Faça login para continuar com seu pedido.')
  }

  /**
   * Notificação de carrinho vazio
   */
  const carrinhoVazio = () => {
    info('Adicione itens ao carrinho para fazer um pedido.')
  }

  return {
    // Métodos básicos
    success,
    error,
    warning,
    info,
    show,
    clear,
    
    // Métodos específicos do Clube Pizza
    pedidoRealizado,
    itemAdicionado,
    itemRemovido,
    erroConexao,
    camposObrigatorios,
    loginNecessario,
    carrinhoVazio
  }
}
