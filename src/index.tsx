import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import App from './components/App';
import Theme from './theme/Theme';
import store from './store';
import './styles.less';

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>,
  document.getElementById('root')
);
