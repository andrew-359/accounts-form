import { SystemConfig } from "@/types/main"
import { ACCOUNT_FORM } from "./accountForm"

export const SYSTEM: SystemConfig = {
  appTitle: `vue3-form`,
  defaultConfig: ACCOUNT_FORM
} as const