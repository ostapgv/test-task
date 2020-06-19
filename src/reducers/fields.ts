import {
  SUBMIT_FORM,
  VALIDATE_FIELD,
  VALIDATE_FORM,
} from '../constants/actionTypes';
import InputRow from 'components/fields/InputField/InputField';
import { createIsValidMaxLength, isNotEmpty } from '../validators';

enum SECTION_ENUM {
  ABOUT = 'About',
  COORDINATOR = 'Coordinator',
  WHEN = 'When',
}

const initialState = {
  title: {
    component: InputRow,
    section: SECTION_ENUM.ABOUT,
    name: 'title',
    label: 'TITLE',
    value: '',
    validators: [isNotEmpty],
    isRequired: true,
  },
  description: {
    component: InputRow,
    section: 'About',
    name: 'description',
    label: 'DESCRIPTION',
    value: '',
    validators: [isNotEmpty, createIsValidMaxLength(140)],
    maxLength: 140,
    isRequired: true,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_FIELD:
      return state;
    case VALIDATE_FORM:
      return state;
    case SUBMIT_FORM:
      return state;
    default:
      return state;
  }
};
