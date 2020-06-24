import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Success from 'components/Success';
import Theme from './theme/Theme';
import store from './store';
import './styles.less';

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <Router>
        <Switch>
          <Route path="/success" component={Success} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Theme>
  </Provider>,
  document.getElementById('root')
);
