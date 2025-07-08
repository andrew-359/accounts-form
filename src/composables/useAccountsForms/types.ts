import { Account } from "@/types/main"
import { SubmitedPayload } from "../useBaseForm/useBaseForm"

export type FieldMeta = { id: string }

export type FormValues = Omit<Account, `id`>

export type ValidatedAccountForm = SubmitedPayload<FormValues, FieldMeta>