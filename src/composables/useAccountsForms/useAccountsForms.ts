import { useAccountsStore } from "@/stores/accounts"
import { nextTick, onMounted, ref } from "vue"
import { UIFormPublicInstance } from "../useBaseForm/useBaseForm"
import { FieldMeta, FormValues, ValidatedAccountForm } from "./types"
import { Account } from "@/types/main"

export const useAccountsForms = () => {
    const { loadAccounts, updateAccounts, getAccounts } = useAccountsStore()
    const formsRefs = ref<UIFormPublicInstance[]>([])

    const setValues = () => {
        formsRefs.value.map((form, idx) => {
            //расширяемо
            form.setValues<Account>({ ...getAccounts.value[idx] })
            form.resetValidate()
        })
    }
    
    const onSave = async () => {
        const results: ValidatedAccountForm[] = await Promise.all(
            formsRefs.value.map((form, idx) =>
                //расширяемо
                form.submit<FormValues, FieldMeta>({ id: getAccounts.value[idx].id })
            )
        );

        updateAccounts(results)
    }

    onMounted(async() => {
        loadAccounts()
        await nextTick();
        setValues()
    })

    return {
        onSave,
        formsRefs,
        setValues
    }
}