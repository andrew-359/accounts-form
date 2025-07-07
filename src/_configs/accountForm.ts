import { FormConfig } from "@/types/main";
import * as yup from 'yup'

export const ACCOUNT_FORM: FormConfig = {
    title: 'Учетные записи',
    fields: [
        {
            name: 'labels',
            type: 'text',
            label: 'Метка',
            placeholder: 'Введите метки через ;',
            help: 'Вводите метки через ;',
            clearButton: true,
            rules: yup.string().max(50)
        },
        {
            name: 'type',
            type: 'select',
            label: 'Тип записи',
            options: ['LDAP', 'local'],
            clearButton: false,
            rules: yup.string().oneOf(['LDAP', 'local']).required()
        },
        {
            name: 'login',
            type: 'text',
            label: 'Логин',
            placeholder: 'Введите логин',
            clearButton: true,
            rules: yup.string().required().max(100)
        },
        {
            name: 'password',
            type: 'password',
            label: 'Пароль',
            placeholder: 'Введите пароль',
            clearButton: true,
            showIf: (values) => values.type === 'local',
            //Можно еще поиграться с уровнями абстракция над yup и сделать тут типизированно тоже
            //и сделать еще чуть красивее, но это оверхед в данной задаче
            rules: yup.string().max(100).when('type', {
                is: 'local',
                then: (schema) => schema.required(),
                otherwise: (schema) => schema.notRequired()
            })
        }
    ]
} as const