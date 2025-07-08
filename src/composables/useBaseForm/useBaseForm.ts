import { toTypedSchema } from "@vee-validate/yup"
import { useForm } from "vee-validate"
import { object } from "yup"
import { createValidationShape, fieldComponentMap } from "./utils"
import { FormConfig } from "@/types/main"
import { computed, ref } from "vue"

export type SubmitedPayload<T, M = undefined> = { 
  valid: boolean
  values: T
  meta: M
}

export interface FormPublicInstance {
  //расширяемо
  submit: <T, M>(meta: M) => Promise<SubmitedPayload<T, M>>
  setValues: <T extends Record<string, unknown>>(arg: T) => void
  resetValidate: () => unknown
  showSuccessAnimation: () => void
}

export const useBaseForm = (config: FormConfig) => {
  const shape = createValidationShape(config?.fields)
  const schema = object().shape(shape)
  const isSuccess = ref(false)

  const { validate, values, setValues, resetForm, errors, meta } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues: config?.fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue
      return acc
    }, {} as Record<string, unknown>)
  })

  const submit = async <T = unknown, M = {}>(meta: M): Promise<SubmitedPayload<T, M>> => {
    const { valid } = await validate()
    return { valid, values: values as T, meta }
  }

  const reset = () => {
    //TODO
    resetForm({
      values,
      errors: {}
    })
  }

  const hasErrors = computed<boolean>(() => {
    return Boolean(Object.entries(errors.value).length)
  })

  const showSuccessAnimation = () => {
    if (meta.value.dirty) {
      //TODO
      resetForm({
        values,
      })
      isSuccess.value = true
      setTimeout(() => (isSuccess.value = false), 1000)
    }
        
  }

  return {
    submit, values, fieldComponentMap, 
    setValues, resetValidate: reset, hasErrors, isSuccess, showSuccessAnimation
  }
}