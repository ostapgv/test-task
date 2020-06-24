import {
  UPDATE_FIELD,
  GET_INITIAL_FORM_DATA,
  SUBMIT_FORM,
} from '../constants/actionTypes';
import { initialAppState } from '../constants/appState';

export default (fields = initialAppState.fields, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      const field = action.payload;
      return { ...fields, [field.name]: field };
    case GET_INITIAL_FORM_DATA:
      const { category, responsible, duplicatedTitles } = action.payload;
      return {
        ...fields,
        category: { ...fields.category, options: category },
        responsible: { ...fields.responsible, options: responsible },
        duplicatedTitles,
      };
    case SUBMIT_FORM:
      return { ...fields, success: true };
    default:
      return fields;
  }
};
