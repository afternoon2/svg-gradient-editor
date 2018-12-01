import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { store, history } from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { StoreThemeProvider } from './components/layout/StoreThemeProvider';
import { ViewWrapper } from './components/layout/ViewWrapper';
import { Home } from './views/home/Home';
import { GlobalStyles } from './components/layout/GlobalStyles';
import { ThemeSwitch } from './components/layout/ThemeSwitch';

const App = () => (
  <Provider store={store}>
    <StoreThemeProvider>
      <ConnectedRouter history={history}>
        <ViewWrapper>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
          </Switch>
          <ThemeSwitch />
          <GlobalStyles />
        </ViewWrapper>
      </ConnectedRouter>
    </StoreThemeProvider>
  </Provider>
);

export { App };
