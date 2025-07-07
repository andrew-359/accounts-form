import { toTypedSchema } from "@vee-validate/yup";
import { useForm } from "vee-validate";
import { object } from "yup";
import { createValidationShape, fieldComponentMap } from "./utils";
import { FormConfig } from "@/types/main";

export type SubmitedPayload<T, M = undefined> = { 
    valid: boolean
    values: T
    meta?: M
}

export interface UIFormPublicInstance {
    //расширяемо
    submit: <T, M>(meta: M) => Promise<SubmitedPayload<T, M>>;
    setValues: <T extends Record<string, unknown>>(arg: T) => void
}

export const useBaseForm = (config: FormConfig) => {
    const shape = createValidationShape(config?.fields)
    const schema = object().shape(shape);

    const { validate, values, setValues } = useForm({
        validationSchema: toTypedSchema(schema),
        initialValues: config?.fields.reduce((acc, field) => {
            acc[field.name] = field.initialValue;
            return acc;
        }, {} as Record<string, unknown>)
    });

    const submit = async <T = unknown, M = undefined>(meta?: M): Promise<SubmitedPayload<T, M>> => {
        const { valid } = await validate();
        return { valid, values: values as T, meta };
    };

    return {
        submit, values, fieldComponentMap, setValues
    }
}