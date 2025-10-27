/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.{vue,js,ts}",
    "./app/pages/**/*.{vue,js,ts}",
    "./app/composables/**/*.{js,ts}",
    "./app/plugins/**/*.{js,ts}",
    "./app/utils/**/*.{js,ts}",
    "./app/**/*.{vue,js,ts}",
    "./shared/**/*.{js,ts,vue}",
    "./nuxt.config.ts"
  ],
  theme: {
    extend: {
      colors: {
        // === CORES PRIMÁRIAS ===
        primary: {
          50: '#fff7ed',   // Laranja muito claro
          100: '#ffedd5',  // Laranja claro
          200: '#fed7aa',  // Laranja suave
          300: '#fdba74',  // Laranja médio claro
          400: '#fb923c',  // Laranja médio
          500: '#f97316',  // Laranja principal (base)
          600: '#ea580c',  // Laranja escuro
          700: '#c2410c',  // Laranja mais escuro
          800: '#9a3412',  // Laranja muito escuro
          900: '#7c2d12',  // Laranja quase marrom
          950: '#431407'   // Laranja mais escuro possível
        },
        
        // === CORES SECUNDÁRIAS (Vermelho Pizza) ===
        secondary: {
          50: '#fef2f2',   // Vermelho muito claro
          100: '#fee2e2',  // Vermelho claro
          200: '#fecaca',  // Vermelho suave
          300: '#fca5a5',  // Vermelho médio claro
          400: '#f87171',  // Vermelho médio
          500: '#ef4444',  // Vermelho principal
          600: '#dc2626',  // Vermelho escuro (da imagem)
          700: '#b91c1c',  // Vermelho mais escuro
          800: '#991b1b',  // Vermelho muito escuro
          900: '#7f1d1d',  // Vermelho quase marrom
          950: '#450a0a'   // Vermelho mais escuro possível
        },
        
        // === CORES NEUTRAS (Pretos e Cinzas) ===
        neutral: {
          0: '#ffffff',    // Branco puro
          50: '#fafafa',   // Branco quase puro
          100: '#f5f5f5',  // Cinza muito claro
          200: '#e5e5e5',  // Cinza claro
          300: '#d4d4d4',  // Cinza médio claro
          400: '#a3a3a3',  // Cinza médio
          500: '#737373',  // Cinza
          600: '#525252',  // Cinza escuro
          700: '#404040',  // Cinza muito escuro
          800: '#262626',  // Quase preto
          900: '#171717',  // Preto suave
          950: '#0a0a0a'   // Preto intenso
        },
        
        // === CORES SEMÂNTICAS ===
        success: {
          light: '#bbf7d0',  // Verde claro
          DEFAULT: '#22c55e', // Verde principal
          dark: '#15803d'     // Verde escuro
        },
        
        warning: {
          light: '#fde68a',  // Amarelo claro
          DEFAULT: '#f59e0b', // Amarelo principal
          dark: '#d97706'     // Amarelo escuro
        },
        
        error: {
          light: '#fecaca',  // Vermelho claro
          DEFAULT: '#ef4444', // Vermelho principal
          dark: '#dc2626'     // Vermelho escuro
        },
        
        info: {
          light: '#bfdbfe',  // Azul claro
          DEFAULT: '#3b82f6', // Azul principal
          dark: '#1d4ed8'     // Azul escuro
        },
        
        // === CORES DE BACKGROUND ===
        background: {
          primary: '#ffffff',   // Fundo principal (branco)
          secondary: '#fafafa', // Fundo secundário (cinza muito claro)
          tertiary: '#f5f5f5',  // Fundo terciário (cinza claro)
          dark: '#171717',      // Fundo escuro
          darker: '#0a0a0a'     // Fundo mais escuro
        },
        
        // === CORES DE TEXTO ===
        text: {
          primary: '#171717',   // Texto principal (preto suave)
          secondary: '#525252', // Texto secundário (cinza escuro)
          tertiary: '#737373',  // Texto terciário (cinza)
          inverse: '#ffffff',   // Texto inverso (branco)
          muted: '#a3a3a3'     // Texto esmaecido (cinza médio)
        },
        
        // === CORES DE BORDA ===
        border: {
          light: '#e5e5e5',    // Borda clara
          DEFAULT: '#d4d4d4',  // Borda padrão
          dark: '#a3a3a3',     // Borda escura
          accent: '#f97316'     // Borda de destaque (laranja)
        }
      },
      
      // === GRADIENTES PERSONALIZADOS ===
      backgroundImage: {
        // Gradientes principais
        'gradient-primary': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        
        // Gradientes de fundo
        'gradient-warm': 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
        'gradient-dark': 'linear-gradient(135deg, #262626 0%, #171717 100%)',
        'gradient-hero': 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fdba74 100%)',
        
        // Gradientes especiais
        'gradient-pizza': 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #dc2626 100%)',
        'gradient-glow': 'radial-gradient(circle at center, #f97316 0%, #ea580c 100%)',
        
        // Gradientes com transparência
        'gradient-overlay': 'linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(234, 88, 12, 0.9) 100%)',
        'gradient-fade': 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
      },
      
      // === SOMBRAS PERSONALIZADAS ===
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 2px 8px -2px rgba(0, 0, 0, 0.06)',
        'primary': '0 4px 25px -5px rgba(249, 115, 22, 0.3), 0 10px 10px -5px rgba(249, 115, 22, 0.1)',
        'secondary': '0 4px 25px -5px rgba(239, 68, 68, 0.3), 0 10px 10px -5px rgba(239, 68, 68, 0.1)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}

