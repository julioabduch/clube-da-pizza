import Toast, { POSITION, TYPE } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Configurações personalizadas do Toast
  const options = {
    // Posição dos toasts
    position: POSITION.TOP_RIGHT,
    
    // Timeout padrão (5 segundos)
    timeout: 5000,
    
    // Permitir fechar clicando no toast
    closeOnClick: true,
    
    // Pausar timeout quando hover
    pauseOnHover: true,
    
    // Pausar timeout quando a aba perde foco
    pauseOnFocusLoss: true,
    
    // Permitir arrastar para fechar
    draggable: true,
    
    // Distância para arrastar
    draggablePercent: 0.6,
    
    // Mostrar barra de progresso
    showCloseButtonOnHover: false,
    
    // Esconder barra de progresso
    hideProgressBar: false,
    
    // Ícones personalizados usando nosso sistema de cores
    toastClassName: "clube-pizza-toast",
    
    // Configurações de container
    container: document.body,
    
    // Tema personalizado integrado ao sistema de cores
    toastDefaults: {
      // Toast de sucesso
      [TYPE.SUCCESS]: {
        timeout: 4000,
        closeButton: "button",
        icon: true,
        rtl: false
      },
      // Toast de erro
      [TYPE.ERROR]: {
        timeout: 0, // Não remove automaticamente
        closeButton: "button", 
        icon: true
      },
      // Toast de aviso
      [TYPE.WARNING]: {
        timeout: 6000,
        closeButton: "button",
        icon: true
      },
      // Toast de info
      [TYPE.INFO]: {
        timeout: 5000,
        closeButton: "button",
        icon: true
      }
    }
  }

  // Registrar o plugin
  nuxtApp.vueApp.use(Toast, options)
})
