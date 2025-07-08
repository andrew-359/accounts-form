import type { App } from "vue"
import BasePlaceholder from '@/baseComponents/BasePlaceholder.vue'
import BaseForm from '@/baseComponents/BaseForm.vue'
import BaseInputPassword from '@/baseComponents/BaseInputPassword.vue'
import BaseInputText from '@/baseComponents/BaseInputText.vue'
import BaseSelect from '@/baseComponents/BaseSelect.vue'
import BaseButton from '@/baseComponents/BaseButton.vue'
import BaseInputChip from '@/baseComponents/BaseInputChip.vue'


export const registerClobalCoponents = (app: App) => {
  app
    .component(`UIButton`, BaseButton)
    .component(`UIInputText`, BaseInputText)
    .component(`UIInputPassword`, BaseInputPassword)
    .component(`UISelect`, BaseSelect)
    .component(`UIForm`, BaseForm)
    .component(`UIPlaceholder`, BasePlaceholder)
    .component(`UIInputChip`, BaseInputChip)

}
