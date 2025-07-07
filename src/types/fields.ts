// Типы для вариантов поля
export type FieldType = 'text' | 'password' | 'select';

export type FieldBase<T extends FieldType, V = unknown> = {
    name: string;
    type: T;
    label: string;
    placeholder?: string;
    help?: string;
    initialValue?: V;
    clearButton?: boolean
    //todo - позже
    showIf?: (values: Record<string, unknown>) => boolean;
    rules: unknown
  };


  export type Text = FieldBase<'text', string>;
  export type Password = FieldBase<'password', string>;
  export type Select<V = unknown> = FieldBase<'select', V> & {
    options: V[];
  };
  
  export type Field = Text | Password | Select;