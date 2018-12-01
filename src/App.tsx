import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { store, history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { ViewWrapper } from './components/layout/ViewWrapper';
import { Home } from './views/home/Home';
import { GlobalStyles } from './components/layout/GlobalStyles';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ViewWrapper>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
        <GlobalStyles />
      </ViewWrapper>
    </ConnectedRouter>
  </Provider>
);

export { App };
