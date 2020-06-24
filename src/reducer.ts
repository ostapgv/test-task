import { combineReducers } from 'redux';
import form from './reducers/form';
import fields from './reducers/fields';
import duplicatedTitles from './reducers/duplicatedTitles';

export default combineReducers({ form, fields, duplicatedTitles });
