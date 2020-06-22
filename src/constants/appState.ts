import { FieldsInterface, formFields } from './formFields';

export interface AppStateInterface {
  fields: FieldsInterface;
}

export const initialAppState = {
  fields: formFields,
};
