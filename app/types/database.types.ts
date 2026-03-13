export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type SubscriptionStatus = 
  | 'trial'      // Período de teste (7 dias)
  | 'ativa'      // Assinatura ativa
  | 'atrasada'   // Pagamento atrasado (até 7 dias)
  | 'cancelada'  // Cancelada (mais de 7 dias de atraso)
  | 'pendente'   // Trial expirado sem assinatura

export interface Database {
  public: {
    Tables: {
      pag_usuarios: {
        Row: {
          id: number
          created_at: string
          user_id: string | null
          email: string
          customer: string | null
          data_expiracao: string
          subscription_id: string | null
          data_vencimento: string | null
          ordens_limite: number
        }
        Insert: {
          id?: number
          created_at?: string
          user_id?: string | null
          email: string
          customer?: string | null
          data_expiracao?: string
          subscription_id?: string | null
          data_vencimento?: string | null
          ordens_limite?: number
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string | null
          email?: string
          customer?: string | null
          data_expiracao?: string
          subscription_id?: string | null
          data_vencimento?: string | null
          ordens_limite?: number
        }
      }
      pag_ordens: {
        Row: {
          id: number
          created_at: string
          user_id: string | null
          nome_ordem: string
        }
        Insert: {
          id?: number
          created_at?: string
          user_id?: string | null
          nome_ordem: string
        }
        Update: {
          id?: number
          created_at?: string
          user_id?: string | null
          nome_ordem?: string
        }
      }
    }
    Views: {
      pag_usuarios_view: {
        Row: {
          id: number
          created_at: string
          user_id: string | null
          email: string
          customer: string | null
          data_expiracao: string
          subscription_id: string | null
          data_vencimento: string | null
          ordens_limite: number
          ordens_criadas: number
          status: SubscriptionStatus
        }
      }
    }
    Functions: {
      // Add your function definitions here
    }
    Enums: {
      // Add your enum definitions here
    }
    CompositeTypes: {
      // Add your composite type definitions here
    }
  }
}
