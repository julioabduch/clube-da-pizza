# Vue Toastification - Sistema de Notificações

Sistema de notificações toast instalado e configurado para o Clube Pizza.

## 📦 Instalação Realizada

```bash
npm install vue-toastification@next  # Versão para Vue 3
```

## 🔧 Arquivos Criados

### 1. Plugin (`/app/plugins/toast.client.ts`)
- Configuração global do vue-toastification
- Integrado ao sistema de cores
- Configurações personalizadas para UX

### 2. Composable (`/app/composables/useNotification.ts`)
- Interface simplificada para usar toasts
- Métodos específicos para o Clube Pizza
- Tipagem TypeScript completa

### 3. Estilos (`/app/assets/css/toastification.css`)
- Estilos personalizados integrados ao tema
- Cores do sistema aplicadas
- Responsividade para mobile

## 🎨 Como Usar

### Uso Básico
```vue
<script setup lang="ts">
const { useNotification } = await import('~/composables/useNotification')
const notification = useNotification()

// Métodos básicos
const showSuccess = () => {
  notification.success('Operação realizada com sucesso!')
}

const showError = () => {
  notification.error('Erro ao processar solicitação')
}

const showWarning = () => {
  notification.warning('Atenção: Verifique os dados')
}

const showInfo = () => {
  notification.info('Informação importante')
}
</script>

<template>
  <div>
    <button @click="showSuccess">Sucesso</button>
    <button @click="showError">Erro</button>
    <button @click="showWarning">Aviso</button>
    <button @click="showInfo">Info</button>
  </div>
</template>
```

### Métodos Específicos do Clube Pizza
```vue
<script setup lang="ts">
const { useNotification } = await import('~/composables/useNotification')
const notification = useNotification()

// Notificações específicas da aplicação
const adicionarPizza = () => {
  notification.itemAdicionado('Pizza Margherita')
}

const finalizarPedido = () => {
  const numeroPedido = '1234'
  notification.pedidoRealizado(numeroPedido)
}

const removerItem = () => {
  notification.itemRemovido('Pizza Calabresa')
}

const verificarLogin = () => {
  notification.loginNecessario()
}
</script>
```

### Métodos Disponíveis

#### Básicos
- `success(message, options?)` - Notificação de sucesso
- `error(message, options?)` - Notificação de erro
- `warning(message, options?)` - Notificação de aviso
- `info(message, options?)` - Notificação de informação
- `show(message, options?)` - Notificação padrão
- `clear()` - Remove todos os toasts

#### Específicos do Clube Pizza
- `pedidoRealizado(numeroPedido?)` - Pedido confirmado
- `itemAdicionado(nomeItem)` - Item adicionado ao carrinho
- `itemRemovido(nomeItem)` - Item removido do carrinho
- `erroConexao()` - Erro de conectividade
- `camposObrigatorios()` - Validação de formulário
- `loginNecessario()` - Autenticação necessária
- `carrinhoVazio()` - Carrinho sem itens

## ⚙️ Configurações

### Posição
- TOP_RIGHT (padrão)
- TOP_LEFT
- TOP_CENTER
- BOTTOM_RIGHT
- BOTTOM_LEFT
- BOTTOM_CENTER

### Timeouts
- **Sucesso**: 4 segundos
- **Info**: 5 segundos
- **Aviso**: 6 segundos
- **Erro**: Permanente (timeout: 0)

### Recursos
- ✅ Fechar clicando
- ✅ Pausar no hover
- ✅ Arrastar para remover
- ✅ Barra de progresso
- ✅ Ícones automáticos
- ✅ Responsivo

## 🎨 Integração Visual

### Cores do Sistema
- **Sucesso**: `success-DEFAULT` (#22c55e)
- **Erro**: `error-DEFAULT` (#ef4444)
- **Aviso**: `warning-DEFAULT` (#f59e0b)
- **Info**: `info-DEFAULT` (#3b82f6)

### Estilos
- Bordas arredondadas (`rounded-xl`)
- Sombras suaves (`shadow-medium`)
- Transições suaves
- Hover effects
- Mobile responsivo

## 📱 Responsividade

### Desktop
- Posição: Canto superior direito
- Largura: Fixa
- Margin: Padrão

### Mobile
- Posição: Full width com margins
- Bordas menores
- Fonte menor
- Espaçamento otimizado

## 🚀 Exemplos Práticos

### Formulário com Validação
```vue
<script setup lang="ts">
const { useNotification } = await import('~/composables/useNotification')
const notification = useNotification()

const submitForm = async (formData) => {
  try {
    // Validação
    if (!formData.email) {
      notification.camposObrigatorios()
      return
    }
    
    // Processamento
    notification.info('Processando...')
    await api.submit(formData)
    
    // Sucesso
    notification.success('Dados salvos com sucesso!')
    
  } catch (error) {
    if (error.code === 'NETWORK_ERROR') {
      notification.erroConexao()
    } else {
      notification.error('Erro inesperado. Tente novamente.')
    }
  }
}
</script>
```

### Carrinho de Compras
```vue
<script setup lang="ts">
const { useNotification } = await import('~/composables/useNotification')
const notification = useNotification()

const addToCart = (pizza) => {
  // Lógica do carrinho
  cart.add(pizza)
  
  // Notificação
  notification.itemAdicionado(pizza.nome)
}

const removeFromCart = (pizza) => {
  cart.remove(pizza)
  notification.itemRemovido(pizza.nome)
}

const checkout = () => {
  if (cart.isEmpty()) {
    notification.carrinhoVazio()
    return
  }
  
  if (!user.isLoggedIn()) {
    notification.loginNecessario()
    return
  }
  
  // Processar pedido...
  const numeroPedido = generateOrderNumber()
  notification.pedidoRealizado(numeroPedido)
}
</script>
```

## 🎯 Status

- ✅ **Instalado**: vue-toastification@next
- ✅ **Configurado**: Plugin global
- ✅ **Estilizado**: Integrado ao tema
- ✅ **Composable**: Interface simplificada
- ✅ **Documentado**: Guia completo
- ⚠️ **Testado**: Aguardando implementação

---
*Sistema de notificações pronto para uso no Clube Pizza* 🍕🔔
