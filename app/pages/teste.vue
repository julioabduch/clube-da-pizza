<template>
  <div class="min-h-screen bg-gradient-hero py-8 sm:py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cabeçalho -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          🧪 Página de Teste - Componentes Base
        </h1>
        <p class="text-base sm:text-lg text-text-secondary">
          Avaliação dos componentes BaseButton e BaseInput
        </p>
      </div>

      <!-- Seção BaseButton -->
      <section class="bg-background-primary rounded-xl shadow-medium p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-4 sm:mb-6 flex items-center">
          <BaseIcon name="sparkles" size="md" lg:size="lg" color="primary" class="mr-2 sm:mr-3" />
          BaseButton - Variantes e Tamanhos
        </h2>

        <!-- Variantes -->
        <div class="mb-6 sm:mb-8">
          <h3 class="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4">Variantes</h3>
          <div class="flex flex-wrap gap-2 sm:gap-4">
            <BaseButton variant="primary" @click="handleClick('Primary')">
              Primary Button
            </BaseButton>
            
            <BaseButton variant="secondary" @click="handleClick('Secondary')">
              Secondary Button
            </BaseButton>
            
            <BaseButton variant="outline" @click="handleClick('Outline')">
              Outline Button
            </BaseButton>
            
            <BaseButton variant="ghost" @click="handleClick('Ghost')">
              Ghost Button
            </BaseButton>
            
            <BaseButton variant="danger" @click="handleClick('Danger')">
              Danger Button
            </BaseButton>
          </div>
        </div>

        <!-- Tamanhos -->
        <div class="mb-6 sm:mb-8">
          <h3 class="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4">Tamanhos</h3>
          <div class="flex flex-wrap items-center gap-2 sm:gap-4">
            <BaseButton size="sm" variant="primary">
              Small
            </BaseButton>
            
            <BaseButton size="md" variant="primary">
              Medium
            </BaseButton>
            
            <BaseButton size="lg" variant="primary">
              Large
            </BaseButton>
          </div>
        </div>

        <!-- Estados -->
        <div class="mb-6 sm:mb-8">
          <h3 class="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4">Estados</h3>
          <div class="flex flex-wrap gap-2 sm:gap-4">
            <BaseButton variant="primary">
              Normal
            </BaseButton>
            
            <BaseButton variant="primary" :disabled="true">
              Disabled
            </BaseButton>
          </div>
        </div>

        <!-- Com ícones -->
        <div>
          <h3 class="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4">Com Ícones</h3>
          <div class="flex flex-wrap gap-2 sm:gap-4">
            <BaseButton variant="primary" @click="handleClick('Download')">
              <BaseIcon name="arrow-right" size="sm" class="mr-2" />
              Download
            </BaseButton>
            
            <BaseButton variant="outline" @click="handleClick('Settings')">
              <BaseIcon name="settings" size="sm" class="mr-2" />
              Configurações
            </BaseButton>
            
            <BaseButton variant="ghost" @click="handleClick('Heart')">
              <BaseIcon name="heart" size="sm" class="mr-2" />
              Favorito
            </BaseButton>
          </div>
        </div>
      </section>

      <!-- Seção BaseInput -->
      <section class="bg-background-primary rounded-xl shadow-medium p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-4 sm:mb-6 flex items-center">
          <BaseIcon name="user" size="md" lg:size="lg" color="primary" class="mr-2 sm:mr-3" />
          BaseInput - Tipos e Estados
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <!-- Coluna 1 -->
          <div class="space-y-4 sm:space-y-6">
            <!-- Input básico -->
            <BaseInput
              v-model="formData.nome"
              label="Nome Completo"
              placeholder="Digite seu nome"
              :required="true"
            />

            <!-- Input com ícone -->
            <BaseInput
              v-model="formData.email"
              type="email"
              label="E-mail"
              icon="email"
              placeholder="seu@email.com"
              help-text="Será usado para confirmação do pedido"
              :required="true"
            />

            <!-- Input password -->
            <BaseInput
              v-model="formData.senha"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              help-text="Mínimo 8 caracteres"
              :required="true"
            />

            <!-- Input com erro -->
            <BaseInput
              v-model="formData.telefone"
              type="tel"
              label="Telefone"
              icon="phone"
              placeholder="(11) 99999-9999"
              :error="telefoneError"
              :required="true"
            />
          </div>

          <!-- Coluna 2 -->
          <div class="space-y-4 sm:space-y-6">
            <!-- Input number -->
            <BaseInput
              v-model="formData.idade"
              type="number"
              label="Idade"
              placeholder="Sua idade"
            />

            <!-- Input search -->
            <BaseInput
              v-model="formData.busca"
              type="search"
              label="Buscar Pizza"
              icon="search"
              placeholder="Margherita, Calabresa..."
              help-text="Digite o nome da pizza que procura"
            />

            <!-- Input desabilitado -->
            <BaseInput
              v-model="formData.readonly"
              label="Campo Somente Leitura"
              :disabled="true"
            />

            <!-- Input tamanhos -->
            <div class="space-y-4">
              <h4 class="text-sm font-medium text-text-primary">Tamanhos</h4>
              
              <BaseInput
                v-model="formData.small"
                size="sm"
                label="Small"
                placeholder="Input pequeno"
              />
              
              <BaseInput
                v-model="formData.medium"
                size="md"
                label="Medium"
                placeholder="Input médio"
              />
              
              <BaseInput
                v-model="formData.large"
                size="lg"
                label="Large"
                placeholder="Input grande"
              />
            </div>
          </div>
        </div>

        <!-- Botões de ação -->
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border-light">
          <BaseButton 
            variant="primary" 
            @click="handleSubmit"
            :disabled="!isFormValid"
          >
            <BaseIcon name="check" size="sm" class="mr-2" />
            Enviar Formulário
          </BaseButton>
          
          <BaseButton variant="outline" @click="clearForm">
            <BaseIcon name="close" size="sm" class="mr-2" />
            Limpar
          </BaseButton>
          
          <BaseButton variant="ghost" @click="fillTestData">
            <BaseIcon name="sparkles" size="sm" class="mr-2" />
            Dados de Teste
          </BaseButton>
        </div>
      </section>

      <!-- Seção de Debug -->
      <section class="bg-background-secondary rounded-xl shadow-soft p-4 sm:p-6">
        <h3 class="text-base sm:text-lg font-semibold text-text-primary mb-3 sm:mb-4 flex items-center">
          <BaseIcon name="info" size="sm" sm:size="md" color="info" class="mr-2" />
          Debug - Valores do Formulário
        </h3>
        
        <pre class="bg-neutral-800 text-neutral-100 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-auto">{{ JSON.stringify(formData, null, 2) }}</pre>
        
        <div class="mt-3 sm:mt-4 text-xs sm:text-sm text-text-tertiary">
          <p><strong>Formulário válido:</strong> {{ isFormValid ? 'Sim' : 'Não' }}</p>
          <p><strong>Último clique:</strong> {{ lastClick || 'Nenhum' }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from '~/components/BaseButton.vue'
import BaseInput from '~/components/BaseInput.vue'
import BaseIcon from '~/components/BaseIcon.vue'

// Meta tags
useHead({
  title: 'Teste de Componentes - Clube Pizza',
  meta: [
    { name: 'description', content: 'Página para testar os componentes BaseButton e BaseInput' }
  ]
})

// Estado do formulário
const formData = ref({
  nome: '',
  email: '',
  senha: '',
  telefone: '',
  idade: '',
  busca: '',
  readonly: 'Este campo não pode ser editado',
  small: '',
  medium: '',
  large: ''
})

// Estado de erro
const telefoneError = ref('')

// Último clique registrado
const lastClick = ref('')

// Computed para validação
const isFormValid = computed(() => {
  return formData.value.nome && 
         formData.value.email && 
         formData.value.senha &&
         formData.value.telefone &&
         !telefoneError.value
})

// Handlers
const handleClick = (buttonName: string) => {
  lastClick.value = `${buttonName} - ${new Date().toLocaleTimeString()}`
  console.log(`Botão clicado: ${buttonName}`)
}

const handleSubmit = () => {
  // Validar telefone
  if (formData.value.telefone && formData.value.telefone.length < 10) {
    telefoneError.value = 'Telefone deve ter pelo menos 10 dígitos'
    return
  }
  
  telefoneError.value = ''
  handleClick('Submit')
  alert('Formulário enviado! Veja o console para detalhes.')
  console.log('Dados do formulário:', formData.value)
}

const clearForm = () => {
  formData.value = {
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    idade: '',
    busca: '',
    readonly: 'Este campo não pode ser editado',
    small: '',
    medium: '',
    large: ''
  }
  telefoneError.value = ''
  lastClick.value = ''
  handleClick('Clear')
}

const fillTestData = () => {
  formData.value = {
    nome: 'João Silva',
    email: 'joao@exemplo.com',
    senha: '12345678',
    telefone: '(11) 99999-9999',
    idade: '25',
    busca: 'Pizza Margherita',
    readonly: 'Este campo não pode ser editado',
    small: 'Texto pequeno',
    medium: 'Texto médio',
    large: 'Texto grande'
  }
  telefoneError.value = ''
  handleClick('Fill Test Data')
}

// Watch para validar telefone em tempo real
watch(() => formData.value.telefone, (newValue) => {
  if (newValue && newValue.length > 0 && newValue.length < 10) {
    telefoneError.value = 'Telefone deve ter pelo menos 10 dígitos'
  } else {
    telefoneError.value = ''
  }
})
</script>
