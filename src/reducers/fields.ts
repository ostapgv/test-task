import {
  UPDATE_FIELD,
  UPDATE_INITIAL_FORM_DATA,
  VALIDATE_FIELD,
} from '../constants/actionTypes';
import { initialAppState } from '../constants/appState';

export default (fields = initialAppState.fields, action) => {
  let name,
    value,
    validationErrors = [];
  switch (action.type) {
    case UPDATE_FIELD:
      ({ name, value } = action.payload);
      return { ...fields, [name]: { ...fields[name], value } };
    case UPDATE_INITIAL_FORM_DATA:
      const { coordinator, responsible, duplicatedTitles } = action.payload;
      return { ...fields, coordinator, responsible, duplicatedTitles };
    case VALIDATE_FIELD:
      ({ name, validationErrors } = action.payload);
      return { ...fields, [name]: { ...fields[name], validationErrors } };
    default:
      return fields;
  }
};
