import { useAccountsStore } from "@/stores/accounts"
import { onMounted, ref } from "vue"
import { UIFormPublicInstance } from "../useBaseForm/useBaseForm"
import { FieldMeta, FormValues, ValidatedAccountForm } from "./types"
import { Account } from "@/types/main"

export const useAccountsForms = () => {
    const { loadAccounts, updateAccounts, getAccounts } = useAccountsStore()
    const forms = ref<UIFormPublicInstance[]>([])

    const setValues = () => {
        console.log('asdsad')
        forms.value.map((form, idx) =>
            //расширяемо
            form.setValues<Account>({ ...getAccounts.value[idx] })
        )
    }
    
    const onSave = async () => {
        const results: ValidatedAccountForm[] = await Promise.all(
            forms.value.map((form, idx) =>
                //расширяемо
                form.submit<FormValues, FieldMeta>({ id: getAccounts.value[idx].id })
            )
        );

        updateAccounts(results)
    }

    onMounted(() => {
        loadAccounts()
        setValues()
    })

    return {
        onSave,
        forms,
        setValues
    }
}