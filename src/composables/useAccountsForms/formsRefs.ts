import { ref } from 'vue'
import type { FormPublicInstance } from '../useBaseForm/useBaseForm'

export const formsRefs = ref<FormPublicInstance[]>([])
export type FormsRefsType = typeof formsRefs 