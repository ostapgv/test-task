import InputField from 'components/fields/InputField/InputField';
import TextAreaField from 'components/fields/TextAreaField/TextAreaField';
import { createIsValidMaxLength, isNotEmpty } from '../validators';
import { SECTIONS } from './sections';
import * as React from 'react';

export interface FieldInterface {
  component: React.FC;
  section: SECTIONS;
  name: string;
  label: string;
  value: string;
  validators:
    | ((value: string) => boolean)[]
    | ((value: string) => Promise<boolean>)[];
  isRequired?: boolean;
  maxLength?: number;
}

type FieldsInterface = Record<string, FieldInterface>;

export const formFields: FieldsInterface = {
  title: {
    component: InputField,
    section: SECTIONS.ABOUT,
    name: 'title',
    label: 'TITLE',
    value: '',
    validators: [isNotEmpty],
    isRequired: true,
  },
  description: {
    component: TextAreaField,
    section: SECTIONS.ABOUT,
    name: 'description',
    label: 'DESCRIPTION',
    value: '',
    validators: [isNotEmpty, createIsValidMaxLength(140)],
    isRequired: true,
    maxLength: 140,
  },
};
