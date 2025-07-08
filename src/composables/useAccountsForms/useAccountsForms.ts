import { useAccountsStore } from "@/stores/accounts"
import { nextTick, onMounted } from "vue"
import { FormPublicInstance } from "../useBaseForm/useBaseForm"
import { FormValues, ValidatedAccountForm } from "./types"
import { formsRefs } from "@/composables/useAccountsForms/formsRefs"

export const useAccountsForms = () => {
  const { loadAccounts, getAccounts } = useAccountsStore()

  const setValues = () => {
    formsRefs.value.forEach((form: FormPublicInstance, idx: number) => {
      form.setValues({ ...getAccounts.value[idx] })
      form.resetValidate()
    })
  }
    
  const onSave = async () => {
    const results: ValidatedAccountForm[] = await Promise.all(
      formsRefs.value.map((form: FormPublicInstance, idx: number) =>
        form.submit<FormValues, { id: string }>({ id: getAccounts.value[idx].id })
      )
    )

    results.forEach((result, idx) => {
      if (result.valid) {
        formsRefs.value[idx].showSuccessAnimation()
      }
    })

    return results
  }

  onMounted(async() => {
    loadAccounts()
    await nextTick()
    setValues()
  })

  return {
    onSave,
    formsRefs,
    setValues
  }
}

export type AccountsForms = ReturnType<typeof useAccountsForms>
