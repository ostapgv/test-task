import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { formFields } from './constants/formFields';

const store = createStore(
  rootReducer,
  { fields: formFields },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
