import {
  UPDATE_FIELD,
  UPDATE_INITIAL_FORM_DATA,
  UPDATE_INITIAL_FORM_DATA_ERROR,
  VALIDATE_FIELD,
} from '../constants/actionTypes';
import {
  COORDINATOR_API,
  RESPONSIBLE_API,
  DUPLICATED_TITLES_API,
} from '../constants/api';
import definedValidators from '../validators';
import errorMap from '../constants/errorMap';

const getCoordinator = fetch(COORDINATOR_API).then((res) => res.json());
const getResponsible = fetch(RESPONSIBLE_API).then((res) => res.json());
const getDuplicatedTitles = fetch(DUPLICATED_TITLES_API).then((res) =>
  res.json()
);

const updateInitialFormData = () => (dispatch) => {
  Promise.all([getCoordinator, getResponsible, getDuplicatedTitles])
    .then((res) => {
      const [coordinator, responsible, duplicatedTitles] = res;
      dispatch({
        type: UPDATE_INITIAL_FORM_DATA,
        payload: { coordinator, responsible, duplicatedTitles },
      });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_INITIAL_FORM_DATA_ERROR, payload: error });
    });
};

const updateField = (name: string, value: string) => (dispatch) => {
  dispatch({ type: UPDATE_FIELD, payload: { name, value } });
};

const validateField = (name: string, value: string, validators: string[]) => (
  dispatch
) => {
  const fieldValidators = validators.map((validator) =>
    // TODO: pass maxNumber properly
    definedValidators[validator](name, value, 140)
  );
  Promise.all(fieldValidators).then((res) => {
    const validationErrors = [];
    validators.forEach((validator, index) => {
      if (!res[index]) {
        validationErrors.push(
          errorMap.fields[name][validator] || errorMap.fallback[validator]
        );
      }
    });
    dispatch({ type: VALIDATE_FIELD, payload: { name, validationErrors } });
  });
};

export default {
  updateInitialState: updateInitialFormData,
  updateField: updateField,
  validateField: validateField,
};
