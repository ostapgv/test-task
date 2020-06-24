import * as React from 'react';
import { SECTIONS } from './sections';
import InputField from 'components/fields/InputField/InputField';
import TextAreaField from 'components/fields/TextAreaField/TextAreaField';
import SelectField from 'components/fields/SelectField/SelectField';
import RadioField from 'components/fields/RadioField/RadioField';
import PaymentField from 'components/fields/PaymentField/PaymentField';
import NumberField from 'components/fields/NumberField/NumberField';
import EmailField from 'components/fields/EmailField/EmailField';
import StartsOnField from 'components/fields/StartsOnField/StartsOnField';

// export type ValidatorsType = ((value: string) => Promise<boolean>)[];

export interface OptionInterface {
  name: string;
  value: string;
  email?: string;
}

export interface FieldInterface {
  component: React.FC;
  section: SECTIONS;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  validators?: string[];
  validationErrors?: string[];
  isRequired?: boolean;
  maxLength?: number;
  options?: OptionInterface[];
  dependencyFields?: string[];
  isHidden?: boolean;
  description?: string;
}

export interface FieldWithClassNameInterface {
  field: FieldInterface;
  className?: string;
}

export type FieldsInterface = Record<string, FieldInterface>;

export const formFields: FieldsInterface = {
  title: {
    component: InputField,
    section: SECTIONS.ABOUT,
    name: 'title',
    label: 'TITLE',
    placeholder: 'Make it short and clear',
    value: '',
    validators: ['isNotEmpty', 'isDuplicatedTitle'],
    isRequired: true,
  },
  description: {
    component: TextAreaField,
    section: SECTIONS.ABOUT,
    name: 'description',
    label: 'DESCRIPTION',
    placeholder: 'Write about your event, be creative',
    value: '',
    validators: ['isNotEmpty', 'isValidMaxLength'],
    isRequired: true,
    maxLength: 140,
  },
  category: {
    component: SelectField,
    section: SECTIONS.ABOUT,
    name: 'category',
    label: 'CATEGORY',
    placeholder: 'Select category',
    value: '',
  },
  paidEvent: {
    component: RadioField,
    section: SECTIONS.ABOUT,
    name: 'paidEvent',
    label: '',
    value: 'free',
    options: [
      { name: 'Free event', value: 'free' },
      { name: 'Paid event', value: 'paid' },
    ],
    isHidden: true, // won't be visible
  },
  fee: {
    component: PaymentField,
    section: SECTIONS.ABOUT,
    name: 'fee',
    label: 'PAYMENT',
    placeholder: 'Fee',
    value: '',
    validators: ['isNotEmpty'],
    dependencyFields: ['paidEvent'],
  },
  reward: {
    component: NumberField,
    section: SECTIONS.ABOUT,
    name: 'reward',
    label: 'REWARD',
    placeholder: 'Number',
    value: '',
    description: 'reward points for attendance',
  },
  responsible: {
    component: SelectField,
    section: SECTIONS.COORDINATOR,
    name: 'responsible',
    label: 'RESPONSIBLE',
    value: '3',
    options: [],
  },
  email: {
    component: EmailField,
    section: SECTIONS.COORDINATOR,
    name: 'email',
    label: 'EMAIL',
    value: '',
    dependencyFields: ['responsible'],
    validators: ['isValidEmail'],
  },
  date: {
    component: InputField,
    section: SECTIONS.WHEN,
    name: 'date',
    label: '',
    value: '',
    placeholder: 'dd/mm/yyyy',
    isHidden: true,
  },
  time: {
    component: InputField,
    section: SECTIONS.WHEN,
    name: 'time',
    label: '',
    value: '',
    placeholder: '--:--',
    isHidden: true,
  },
  timePeriodType: {
    component: RadioField,
    section: SECTIONS.WHEN,
    name: 'timePeriodType',
    label: '',
    value: 'am',
    options: [
      { name: 'AM', value: 'am' },
      { name: 'PM', value: 'pm' },
    ],
    isHidden: true,
  },
  startsOn: {
    component: StartsOnField,
    section: SECTIONS.WHEN,
    name: 'startsOn',
    label: 'STARTS ON',
    value: '',
    isRequired: true,
    validators: ['isValidDateAndTime'],
  },
  duration: {
    component: NumberField,
    section: SECTIONS.WHEN,
    name: 'duration',
    label: 'DURATION',
    placeholder: 'Number',
    value: '',
    description: 'hour',
  },
};
