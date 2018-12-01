import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { store, history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { Home } from './views/home/Home';
import { GlobalStyles } from './components/layout/GlobalStyles';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
        <GlobalStyles />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>
);

export { App };
