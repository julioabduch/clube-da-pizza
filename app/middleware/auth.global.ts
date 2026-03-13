// Middleware global removido - o módulo @nuxtjs/supabase gerencia automaticamente
// a autenticação e redirecionamento baseado nas configurações do nuxt.config.ts
//
// Para configurar páginas públicas ou protegidas, use as opções:
// - redirectOptions.exclude: páginas que não requerem autenticação
// - redirectOptions.include: apenas páginas específicas requerem autenticação
//
// Configuração atual em nuxt.config.ts:
//   exclude: ['/', '/planos', '/escolher-sabores']
//
// Se precisar de lógica customizada (ex: autorização por roles),
// crie um middleware específico e aplique com definePageMeta()

export default defineNuxtRouteMiddleware(() => {
  // Middleware desabilitado
  return
})
