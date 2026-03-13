-- =========================================
-- DEBUG: Verificar user_id vs auth.uid()
-- Execute este SQL para entender o problema
-- =========================================

-- 1. Ver qual é o auth.uid() atual (usuário logado)
SELECT auth.uid() as meu_user_id;

-- 2. Ver todos os registros de pag_usuarios
SELECT id, user_id, email FROM public.pag_usuarios;

-- 3. Ver se a política está funcionando
SELECT * FROM pg_policies WHERE tablename = 'pag_usuarios';

-- =========================================
-- SOLUÇÃO TEMPORÁRIA: Política mais permissiva
-- =========================================

-- Remover políticas antigas
DROP POLICY IF EXISTS "Usuários podem ver seus próprios dados" ON public.pag_usuarios;
DROP POLICY IF EXISTS "Usuários podem criar seu próprio registro" ON public.pag_usuarios;
DROP POLICY IF EXISTS "Usuários podem atualizar seus próprios dados" ON public.pag_usuarios;
DROP POLICY IF EXISTS "Usuários podem deletar seus próprios dados" ON public.pag_usuarios;

-- Criar política mais permissiva para TESTAR
CREATE POLICY "allow_all_authenticated_users"
ON public.pag_usuarios
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Fazer o mesmo para pag_ordens
DROP POLICY IF EXISTS "Usuários podem ver seus próprios pedidos" ON public.pag_ordens;
DROP POLICY IF EXISTS "Usuários podem criar seus próprios pedidos" ON public.pag_ordens;
DROP POLICY IF EXISTS "Usuários podem atualizar seus próprios pedidos" ON public.pag_ordens;
DROP POLICY IF EXISTS "Usuários podem deletar seus próprios pedidos" ON public.pag_ordens;

CREATE POLICY "allow_all_authenticated_users"
ON public.pag_ordens
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
