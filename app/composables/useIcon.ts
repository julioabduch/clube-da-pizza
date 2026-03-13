import type { Component } from 'vue'

// Importar ícones mais usados do Heroicons
import {
  // Ícones de navegação
  HomeIcon,
  UserIcon,
  CogIcon,
  BellIcon,
  
  // Ícones de ação
  PlusIcon,
  MinusIcon,
  XMarkIcon,
  CheckIcon,
  UserPlusIcon,
  
  // Ícones de setas
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  
  // Ícones de interface
  Bars3Icon,
  MagnifyingGlassIcon,
  HeartIcon,
  StarIcon,
  ShoppingCartIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  DocumentIcon,
  
  // Ícones de comunicação
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  
  // Ícones de mídia social
  ShareIcon,
  
  // Ícones de status
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  
  // Ícones específicos para pizza/restaurante
  ClockIcon,
  MapPinIcon,
  TruckIcon,
  GiftIcon,
  SparklesIcon,
  FireIcon,
  CalendarIcon,
  // Adicionando ícone de pizza temporário (usando prato)
  CircleStackIcon as PizzaIcon
} from '@heroicons/vue/24/outline'

// Ícones sólidos para estados ativos/preenchidos
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  XCircleIcon as XCircleIconSolid,
  ExclamationTriangleIcon as ExclamationTriangleIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
  FireIcon as FireIconSolid,
  SparklesIcon as SparklesIconSolid
} from '@heroicons/vue/24/solid'

interface IconMap {
  [key: string]: Component
}

// Mapa de ícones disponíveis
const OUTLINE_ICONS: IconMap = {
  // Navegação
  home: HomeIcon,
  user: UserIcon,
  settings: CogIcon,
  notifications: BellIcon,
  
  // Ações
  plus: PlusIcon,
  minus: MinusIcon,
  close: XMarkIcon,
  check: CheckIcon,
  'user-plus': UserPlusIcon,
  
  // Setas
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  
  // Interface
  menu: Bars3Icon,
  search: MagnifyingGlassIcon,
  heart: HeartIcon,
  star: StarIcon,
  cart: ShoppingCartIcon,
  eye: EyeIcon,
  'eye-slash': EyeSlashIcon,
  key: KeyIcon,
  document: DocumentIcon,
  
  // Comunicação
  email: EnvelopeIcon,
  envelope: EnvelopeIcon,
  phone: PhoneIcon,
  chat: ChatBubbleLeftRightIcon,
  share: ShareIcon,
  
  // Status
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  error: XCircleIcon,
  
  // Pizza/Restaurante
  clock: ClockIcon,
  location: MapPinIcon,
  delivery: TruckIcon,
  gift: GiftIcon,
  sparkles: SparklesIcon,
  fire: FireIcon,
  calendar: CalendarIcon,
  pizza: PizzaIcon
}

const SOLID_ICONS: IconMap = {
  // Navegação
  'home-solid': HomeIconSolid,
  'user-solid': UserIconSolid,
  
  // Interface
  'heart-solid': HeartIconSolid,
  'star-solid': StarIconSolid,
  'cart-solid': ShoppingCartIconSolid,
  
  // Status
  'success-solid': CheckCircleIconSolid,
  'error-solid': XCircleIconSolid,
  'warning-solid': ExclamationTriangleIconSolid,
  'info-solid': InformationCircleIconSolid,
  
  // Pizza/Restaurante
  'fire-solid': FireIconSolid,
  'sparkles-solid': SparklesIconSolid
}

// Combinar todos os ícones
const ALL_ICONS: IconMap = {
  ...OUTLINE_ICONS,
  ...SOLID_ICONS
}

/**
 * Composable para usar ícones do Heroicons
 * @param iconName Nome do ícone
 * @returns Componente do ícone ou null se não encontrado
 */
export const useIcon = (iconName: string): Component | null => {
  const icon = ALL_ICONS[iconName]
  
  if (!icon) {
    console.warn(`Ícone "${iconName}" não encontrado. Ícones disponíveis:`, Object.keys(ALL_ICONS))
    return null
  }
  
  return icon
}

/**
 * Lista todos os ícones disponíveis
 * @returns Array com nomes dos ícones
 */
export const getAvailableIcons = (): string[] => {
  return Object.keys(ALL_ICONS).sort()
}

/**
 * Verifica se um ícone existe
 * @param iconName Nome do ícone
 * @returns boolean
 */
export const hasIcon = (iconName: string): boolean => {
  return iconName in ALL_ICONS
}

// Exportar os mapas para uso direto se necessário
export { OUTLINE_ICONS, SOLID_ICONS, ALL_ICONS }
