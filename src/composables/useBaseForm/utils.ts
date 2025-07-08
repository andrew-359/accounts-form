import { FieldType } from "@/types/fields"
import { FormConfig } from "@/types/main"
import { Schema } from "yup"

export const createValidationShape = (fields: FormConfig[`fields`] = []): Record<string, Schema<unknown>> => {
  return fields.reduce<Record<string, Schema<unknown>>>((shape, field) => {
    if (field.rules) {
      shape[field.name] = field.rules
    }
    return shape
  }, {})
}
  
export const fieldComponentMap = {
  text: `UIInputText`,
  password: `UIInputPassword`,
  select: `UISelect`,
  chip: `UIInputChip`,
} as const satisfies Record<FieldType, string>