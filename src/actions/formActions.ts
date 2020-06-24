import { AppStateInterface } from '../constants/appState';
import { SUBMIT_FORM, SET_VALIDATED } from '../constants/actionTypes';
import fieldsActions from './fieldsActions';
import { mapStateToRequest } from './fieldsMapping';

const validateAll = (state: AppStateInterface) => (dispatch) => {
  const resultPromises = [];
  Object.values(state.fields).map((field) => {
    if (field?.validators) {
      resultPromises.push(fieldsActions.validateField(field, state)(dispatch));
    }
  });
  Promise.all(resultPromises).then((results) => {
    dispatch({ type: SET_VALIDATED, payload: results.includes(false) });
    if (!results.includes(false)) {
      dispatch(submitForm(state));
    }
  });
};

const submitForm = (state: AppStateInterface) => (dispatch) => {
  // log response instead of sending request
  console.log(mapStateToRequest(state));
  dispatch({ type: SUBMIT_FORM });
};

export default {
  validateAll: validateAll,
  submitForm: submitForm,
};
