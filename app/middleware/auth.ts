// Middleware específico para páginas que requerem autenticação
// Com o módulo @nuxtjs/supabase, este middleware é opcional
// O módulo já gerencia redirecionamento automático
//
// Use este middleware apenas se precisar de lógica adicional
// Como verificação de roles, permissões específicas, etc.
//
// Exemplo de uso em uma página:
// definePageMeta({
//   middleware: 'auth'
// })

export default defineNuxtRouteMiddleware((to, from) => {
  // No lado do servidor, não fazer nada (o módulo Supabase já gerencia)
  if (process.server) return
  
  const user = useSupabaseUser()
  
  // Se não há usuário logado, redirecionar para login
  // (na prática, o módulo Supabase já faz isso automaticamente)
  if (!user.value) {
    return navigateTo('/login')
  }
  
  // Aqui você pode adicionar lógica customizada, como:
  // - Verificar se usuário tem plano ativo
  // - Verificar roles/permissões
  // - Logs de acesso
  // etc.
})
