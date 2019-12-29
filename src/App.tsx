import * as React from 'react';
import AppState from 'components/states/app';
import Theme from 'components/theme';
import Heading from 'components/common/heading';
import Container from 'components/common/container';
import GlobalStyle from 'components/theme/globalStyle';
import FiguresState from 'components/states/figures';

const App: React.FC = () => (
  <AppState>
    <Theme>
      <FiguresState>
        <GlobalStyle />
        <Container>
          <Heading level={1}>Work in progress</Heading>
        </Container>
      </FiguresState>
    </Theme>
  </AppState>
);

export { App };
