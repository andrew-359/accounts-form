// Типы для вариантов поля
import type { Schema } from 'yup'

export type FieldType = `text` | `password` | `select` | `chip`

export type FieldBase<T extends FieldType, V = unknown> = {
  name: string
  type: T
  label: string
  placeholder?: string
  help?: string
  initialValue?: V
  clearButton?: boolean
  rules?: Schema<unknown>
  showIf?: (values: Record<string, unknown>) => boolean
}


export type Text = FieldBase<`text`, string>
export type Password = FieldBase<`password`, string>
export type Select<V = unknown> = FieldBase<`select`, V> & {
  options: V[]
}
export type Chip = FieldBase<`chip`>
  
export type Field = Text | Password | Select | Chip