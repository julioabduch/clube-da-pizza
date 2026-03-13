-- =========================================
-- SOLUÇÃO RÁPIDA: DESABILITAR RLS TEMPORARIAMENTE
-- Execute este SQL no Supabase SQL Editor para testar
-- =========================================

-- ATENÇÃO: Isso desabilita a segurança RLS
-- Use apenas para TESTES em desenvolvimento
-- Em produção, você DEVE usar as políticas corretas

ALTER TABLE public.pag_usuarios DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.pag_ordens DISABLE ROW LEVEL SECURITY;

-- Agora você pode testar sem erro de RLS
-- Depois, execute o arquivo supabase-rls-policies.sql para ativar a segurança corretamente
