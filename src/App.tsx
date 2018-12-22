import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { store, history } from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faList,
  faPaintRoller,
  faCaretDown,
  faCaretUp,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { ConnectedRouter } from 'connected-react-router';
import { StoreThemeProvider } from './components/layout/StoreThemeProvider';
import { Home } from './views/home/Home';
import { Editor } from './views/editor/Editor';
import { GlobalStyles } from './components/layout/GlobalStyles';
import { ThemeSwitch } from './components/layout/ThemeSwitch';

library.add(faChevronLeft);
library.add(faList);
library.add(faPaintRoller);
library.add(faCaretDown);
library.add(faCaretUp);
library.add(faPlus);
library.add(faSearch);

const App = () => (
  <Provider store={store}>
    <StoreThemeProvider>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/editor"
              component={Editor}
            />
          </Switch>
          <ThemeSwitch />
          <GlobalStyles />
        </React.Fragment>
      </ConnectedRouter>
    </StoreThemeProvider>
  </Provider>
);

export { App };
