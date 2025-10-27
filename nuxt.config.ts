export default defineNuxtConfig({
  // === RENDERIZAÇÃO ===
  ssr: false, // Desabilita SSR - aplicação será SPA (Single Page Application)
  
  // === CSS ===
  css: ['~/assets/css/tailwind.css'],
  
  // === CONFIGURAÇÕES GERAIS ===
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // === MÓDULOS ===
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  
  // === CONFIGURAÇÕES DE BUILD ===
  nitro: {
    // Configurações específicas para SPA
    prerender: {
      crawlLinks: false // Não precisa pré-renderizar links em SPA
    }
  },
  
  // === CONFIGURAÇÕES DE APP ===
  app: {
    // Configurações específicas para SPA
    head: {
      // Meta tags globais para SPA
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  }
})