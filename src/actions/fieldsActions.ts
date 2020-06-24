import { UPDATE_FIELD, GET_INITIAL_FORM_DATA } from '../constants/actionTypes';
import { COORDINATOR_API, RESPONSIBLE_API } from '../constants/api';
import definedValidators from '../validators';
import errorMap from '../validators/validationErrorsMap';
import { FieldInterface } from '../constants/formFields';
import {
  mapCategoryOptions,
  mapAndFilterResponsibleOptions,
} from './fieldsMapping';
import { AppStateInterface } from '../constants/appState';

const fetchCategories = () => fetch(COORDINATOR_API).then((res) => res.json());
const fetchResponsible = () => fetch(RESPONSIBLE_API).then((res) => res.json());

const getInitialFormData = () => (dispatch) => {
  Promise.all([fetchCategories(), fetchResponsible()]).then((data) => {
    const [category, responsible] = data;
    dispatch({
      type: GET_INITIAL_FORM_DATA,
      payload: {
        category: mapCategoryOptions(category),
        responsible: mapAndFilterResponsibleOptions(responsible),
      },
    });
  });
};

const updateField = (field: FieldInterface) => (dispatch) => {
  dispatch({ type: UPDATE_FIELD, payload: field });
};

const validateField = (field: FieldInterface, state: AppStateInterface) => (
  dispatch
): Promise<boolean> => {
  const { name, validators } = field;
  if (!validators || !validators.length) {
    return Promise.resolve(false);
  }

  const fieldValidators = validators.map((validator) =>
    definedValidators[validator](field, state)
  );
  // Going through field validators and creating validation errors array (string[])
  return Promise.all(fieldValidators).then((res) => {
    const validationErrors = [];
    validators.forEach((validator, index) => {
      if (!res[index]) {
        validationErrors.push(
          errorMap.fields[name]
            ? errorMap.fields[name][validator]
            : errorMap.fallback[validator]
        );
      }
    });
    dispatch({ type: UPDATE_FIELD, payload: { ...field, validationErrors } });
    return validationErrors.length < 1;
  });
};

export default {
  getInitialState: getInitialFormData,
  updateField: updateField,
  validateField: validateField,
};
