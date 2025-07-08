import { FormConfig } from "@/types/main"
import * as yup from 'yup'

//Можно еще поиграться с уровнями абстракция над yup и сделать тут типизированно тоже
//и сделать еще чуть красивее, но это оверхед в данной задаче - нужно где-то остановиться 
export const ACCOUNT_FORM: FormConfig = {
  title: `Учетные записи`,
  fields: [
    {
      name: `labels`,
      type: `chip`,
      label: `Метка`,
      placeholder: `Введите метки через ;`,
      help: `Вводите метки через ;`,
      rules: yup.array(
        yup.object({
          text: yup.string()
        })
      )
        .test(
          `max-total-length`,
          // не считаем ";"
          `Суммарная длина всех меток не должна превышать 50 символов`,
          (arr) => {
            if (!arr) return true
            const total = arr.reduce((sum, obj) => sum + (obj.text?.length || 0), 0)
            return total <= 50
          }
        )
        .nullable(),
    },
    {
      name: `type`,
      type: `select`,
      label: `Тип записи`,
      options: [`LDAP`, `Локальная`],
      clearButton: true,
      rules: yup.string()
        .oneOf([`LDAP`, `Локальная`], `Выберите тип записи`)
        .required(`Поле обязательно для заполнения`)
    },
    {
      name: `login`,
      type: `text`,
      label: `Логин`,
      placeholder: `Введите логин`,
      rules: yup.string()
        .required(`Поле обязательно для заполнения`)
        .max(100, `Максимум 100 символов`)
    },
    {
      name: `password`,
      type: `password`,
      label: `Пароль`,
      placeholder: `Введите пароль`,
      showIf: (values) => values.type === `Локальная`,
      rules: yup.string()
        .max(100, `Максимум 100 символов`)
        .when(`type`, {
          is: `Локальная`,
          then: (schema) => schema.required(`Поле обязательно для заполнения`),
          otherwise: (schema) => schema.notRequired()
        })
    }
  ]
} as const