import { createApp } from "vue"
import { createPinia } from "pinia"
import PrimeVue from "primevue/config"
import 'primeicons/primeicons.css'
import './styles/tailwind.scss'
import App from "./App.vue"
import { CustomAura } from "@/theme"  
import Tooltip from 'primevue/tooltip'
import { registerClobalCoponents } from "./globalComponents"

export const application = createApp(App)

const create = () => {
  const pinia = createPinia()

  application
    .use(pinia)
    .use(PrimeVue, {
      ripple: true,
      theme: {
        preset: CustomAura,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'theme, base, primevue'
          }
        }
      },
    })
    
  application.directive(`tooltip`, Tooltip)
  registerClobalCoponents(application)

  application.mount(`#app`)
}

//вдруг это либа будет или микрофронт
create()
