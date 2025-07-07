import { FormConfig } from "@/types/main";

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
            rules: undefined
        },
        {
            name: 'type',
            type: 'select',
            label: 'Тип записи',
            initialValue: 'LDAP',
            options: ['LDAP', 'local'],
            clearButton: false,
            rules: undefined
        },
        {
            name: 'login',
            type: 'text',
            label: 'Логин',
            placeholder: 'Введите логин',
            clearButton: true,
            rules: undefined
        },
        {
            name: 'password',
            type: 'password',
            label: 'Пароль',
            placeholder: 'Введите пароль',
            clearButton: true,
            showIf: (values) => values.type === 'local',
            rules: undefined
        }
    ]
} as const