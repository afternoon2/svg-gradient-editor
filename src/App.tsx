import * as React from 'react';
import AppState from 'components/states/app';
import Theme from 'components/theme';
import Heading from 'components/common/heading';

const App: React.FC = () => (
  <AppState>
    <Theme>
      <Heading level={1}>Work in progress</Heading>
    </Theme>
  </AppState>
);

export { App };
