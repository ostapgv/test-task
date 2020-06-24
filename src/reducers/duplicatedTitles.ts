import { GET_DUPLICATED_TITLES } from '../constants/actionTypes';
import { initialAppState } from '../constants/appState';

export default (
  duplicatedTitles = initialAppState.duplicatedTitles,
  action
) => {
  switch (action.type) {
    case GET_DUPLICATED_TITLES:
      return [...action.payload];
    default:
      return duplicatedTitles;
  }
};
