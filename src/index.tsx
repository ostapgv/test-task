import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import App from './components/App';
import Theme from './theme/Theme';
import store from './store';
import './styles.less';

const ActionTypes = {
  ADD_VALUE: 'ADD_VALUE',
};

function addValue() {
  return {
    type: ActionTypes.ADD_VALUE,
  };
}

function addValueLazy() {
  return function (dispatch) {
    return setTimeout(() => dispatch(addValue()), 300);
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addValueLazy: () => dispatch(addValueLazy()),
    dispatch,
  };
};

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

const AppWithState = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <AppWithState />
    </Theme>
  </Provider>,
  document.getElementById('root')
);
