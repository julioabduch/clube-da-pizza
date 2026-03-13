export default defineNuxtConfig({
  // === RENDERIZAÇÃO ===
  ssr: false, // SPA Mode
  
  // === CSS ===
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/toastification.css'
  ],
  
  // === MÓDULOS ===
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  
  // === SUPABASE CONFIG ===
  supabase: {
    redirect: false, // Desabilita redirect automático para SPA
    cookieOptions: {
      secure: false // Permite cookies em localhost
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      }
    }
  },
  
  // === CONFIGURAÇÕES BÁSICAS ===
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // === VUE CONFIG - DESABILITAR DEVTOOLS ===
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => false
    }
  },
  
  // === VITE CONFIG ===
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => false
        }
      }
    },
    define: {
      '__VUE_PROD_DEVTOOLS__': false,
      '__VUE_OPTIONS_API__': false,
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
      '__VUE_DEVTOOLS_GLOBAL_HOOK__': 'undefined'
    }
  },
  
  // === APP CONFIG ===
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        {
          innerHTML: 'window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = undefined;',
          type: 'text/javascript',
          tagPosition: 'head'
        }
      ]
    }
  }
})