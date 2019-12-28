import * as React from 'react';
import AppState from 'components/states/app';
import Theme from 'components/theme';

const App: React.FC = () => (
  <AppState>
    <Theme>
      <div>Work in progress</div>
    </Theme>
  </AppState>
);

export { App };
