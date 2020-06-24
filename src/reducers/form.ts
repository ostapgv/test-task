import { SET_VALIDATED, SUBMIT_FORM } from '../constants/actionTypes';
import { initialAppState } from '../constants/appState';

export default (form = initialAppState.form, action) => {
  switch (action.type) {
    case SET_VALIDATED:
      return { ...form, success: action.payload };

    case SUBMIT_FORM:
      return { ...form, success: true };
    default:
      return form;
  }
};
