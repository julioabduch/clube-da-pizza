// Plugin para registrar componentes do Headless UI globalmente
import { 
  Dialog, 
  DialogPanel, 
  DialogTitle,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Switch,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  Popover,
  PopoverButton,
  PopoverPanel,
  RadioGroup,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel
} from '@headlessui/vue'

export default defineNuxtPlugin((nuxtApp) => {
  // Registrar componentes do Headless UI globalmente
  const components = {
    // Dialog
    HeadlessDialog: Dialog,
    HeadlessDialogPanel: DialogPanel,
    HeadlessDialogTitle: DialogTitle,
    
    // Menu
    HeadlessMenu: Menu,
    HeadlessMenuButton: MenuButton,
    HeadlessMenuItems: MenuItems,
    HeadlessMenuItem: MenuItem,
    
    // Switch
    HeadlessSwitch: Switch,
    
    // Disclosure
    HeadlessDisclosure: Disclosure,
    HeadlessDisclosureButton: DisclosureButton,
    HeadlessDisclosurePanel: DisclosurePanel,
    
    // Listbox
    HeadlessListbox: Listbox,
    HeadlessListboxButton: ListboxButton,
    HeadlessListboxOptions: ListboxOptions,
    HeadlessListboxOption: ListboxOption,
    
    // Combobox
    HeadlessCombobox: Combobox,
    HeadlessComboboxInput: ComboboxInput,
    HeadlessComboboxButton: ComboboxButton,
    HeadlessComboboxOptions: ComboboxOptions,
    HeadlessComboboxOption: ComboboxOption,
    
    // Popover
    HeadlessPopover: Popover,
    HeadlessPopoverButton: PopoverButton,
    HeadlessPopoverPanel: PopoverPanel,
    
    // Radio Group
    HeadlessRadioGroup: RadioGroup,
    HeadlessRadioGroupOption: RadioGroupOption,
    
    // Tabs
    HeadlessTab: Tab,
    HeadlessTabGroup: TabGroup,
    HeadlessTabList: TabList,
    HeadlessTabPanels: TabPanels,
    HeadlessTabPanel: TabPanel
  }

  // Registrar todos os componentes
  Object.entries(components).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component)
  })
})
