import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faList,
  faPaintRoller,
  faCaretDown,
  faCaretUp,
  faPlus,
  faSearch,
  faTrash,
  faEdit,
  faCode,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { StoreThemeProvider } from './components/layout/StoreThemeProvider';
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
library.add(faTrash);
library.add(faEdit);
library.add(faCode);
library.add(faSave);

const App = () => (
  <Provider store={store}>
    <StoreThemeProvider>
        <React.Fragment>
          <Editor />
          <ThemeSwitch />
          <GlobalStyles />
        </React.Fragment>
    </StoreThemeProvider>
  </Provider>
);

export { App };
