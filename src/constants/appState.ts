import { FieldsInterface, formFields } from './formFields';

export interface FormInterface {
  success: boolean;
  validated: boolean;
}

export interface DuplicatedTitle {
  userId: number;
  id: number;
  title: string;
}

export interface AppStateInterface {
  form: FormInterface;
  fields: FieldsInterface;
  duplicatedTitles: DuplicatedTitle[];
}

export const initialAppState: AppStateInterface = {
  form: {
    success: false,
    validated: false,
  },
  fields: formFields,
  duplicatedTitles: [],
};
