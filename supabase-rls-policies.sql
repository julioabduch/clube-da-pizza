-- =========================================
-- POLÍTICAS RLS PARA CLUBE PIZZA
-- Execute este SQL no Supabase SQL Editor
-- =========================================

-- 1. ATIVAR RLS nas tabelas (se ainda não estiver ativado)
ALTER TABLE public.pag_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pag_ordens ENABLE ROW LEVEL SECURITY;

-- =========================================
-- POLÍTICAS PARA pag_usuarios
-- =========================================

-- Permitir que usuários autenticados VEJAM apenas seus próprios dados
CREATE POLICY "Usuários podem ver seus próprios dados"
ON public.pag_usuarios
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Permitir que usuários autenticados CRIEM seu próprio registro
CREATE POLICY "Usuários podem criar seu próprio registro"
ON public.pag_usuarios
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Permitir que usuários autenticados ATUALIZEM apenas seus próprios dados
CREATE POLICY "Usuários podem atualizar seus próprios dados"
ON public.pag_usuarios
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Permitir que usuários autenticados DELETEM apenas seus próprios dados
CREATE POLICY "Usuários podem deletar seus próprios dados"
ON public.pag_usuarios
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- =========================================
-- POLÍTICAS PARA pag_ordens
-- =========================================

-- Permitir que usuários autenticados VEJAM apenas seus próprios pedidos
CREATE POLICY "Usuários podem ver seus próprios pedidos"
ON public.pag_ordens
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Permitir que usuários autenticados CRIEM seus próprios pedidos
CREATE POLICY "Usuários podem criar seus próprios pedidos"
ON public.pag_ordens
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Permitir que usuários autenticados ATUALIZEM apenas seus próprios pedidos
CREATE POLICY "Usuários podem atualizar seus próprios pedidos"
ON public.pag_ordens
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Permitir que usuários autenticados DELETEM apenas seus próprios pedidos
CREATE POLICY "Usuários podem deletar seus próprios pedidos"
ON public.pag_ordens
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- =========================================
-- VERIFICAR POLÍTICAS CRIADAS
-- =========================================
-- Execute este comando para verificar se as políticas foram criadas:
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
-- FROM pg_policies
-- WHERE schemaname = 'public' AND tablename IN ('pag_usuarios', 'pag_ordens');
