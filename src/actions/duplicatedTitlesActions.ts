import { GET_DUPLICATED_TITLES } from '../constants/actionTypes';
import { DUPLICATED_TITLES_API } from '../constants/api';

const fetchDuplicatedTitles = () =>
  fetch(DUPLICATED_TITLES_API).then((res) => res.json());

const getDuplicatedTitles = () => (dispatch) => {
  fetchDuplicatedTitles().then((duplicatedTitles) => {
    dispatch({
      type: GET_DUPLICATED_TITLES,
      payload: duplicatedTitles,
    });
  });
};

export default {
  getDuplicatedTitles: getDuplicatedTitles,
};
