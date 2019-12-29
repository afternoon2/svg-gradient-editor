import * as React from 'react';
import AppState from 'components/states/app';
import FigureBarState from 'components/states/figure-bar';
import Theme from 'components/theme';
import Heading from 'components/common/heading';
import Container from 'components/common/container';
import GlobalStyle from 'components/theme/globalStyle';

const App: React.FC = () => (
  <AppState>
    <FigureBarState>
      <Theme>
        <GlobalStyle />
        <Container>
          <Heading level={1}>Work in progress</Heading>
        </Container>
      </Theme>
    </FigureBarState>
  </AppState>
);

export { App };
