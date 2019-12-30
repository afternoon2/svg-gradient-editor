import * as React from 'react';
import AppState from 'components/states/app';
import Theme from 'components/theme';
import Container from 'components/common/container';
import GlobalStyle from 'components/theme/globalStyle';
import FiguresState from 'components/states/figures';
import ToolbarState from 'components/states/toolbar';
import Toolbar from 'components/smart/toolbar/Toolbar';

const App: React.FC = () => (
  <AppState>
    <Theme>
      <ToolbarState>
        <FiguresState>
          <GlobalStyle />
          <Container>
            <Toolbar />
          </Container>
        </FiguresState>
      </ToolbarState>
    </Theme>
  </AppState>
);

export { App };
