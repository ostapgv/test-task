import InputField from 'components/fields/InputField/InputField';
import TextAreaField from 'components/fields/TextAreaField/TextAreaField';
import { SECTIONS } from './sections';
import * as React from 'react';

// export type ValidatorsType = ((value: string) => Promise<boolean>)[];

export interface FieldInterface {
  component: React.FC;
  section: SECTIONS;
  name: string;
  label: string;
  value: string;
  validators?: string[];
  isRequired?: boolean;
  maxLength?: number;
  validationErrors?: string[];
}

export type FieldsInterface = Record<string, FieldInterface>;

export const formFields: FieldsInterface = {
  title: {
    component: InputField,
    section: SECTIONS.ABOUT,
    name: 'title',
    label: 'TITLE',
    value: '',
    validators: ['isNotEmpty'],
    isRequired: true,
  },
  description: {
    component: TextAreaField,
    section: SECTIONS.ABOUT,
    name: 'description',
    label: 'DESCRIPTION',
    value: '',
    validators: ['isNotEmpty', 'isValidMaxLength'],
    isRequired: true,
    maxLength: 140,
  },
};
