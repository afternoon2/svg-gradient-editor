import * as React from 'react';
import AppState from 'components/states/app';
import Theme from 'components/common/theme';
import Container from 'components/common/container';
import GlobalStyle from 'components/common/global_style';
import FiguresState from 'components/states/figures';
import ToolbarState from 'components/states/toolbar';
import Toolbar from 'components/compound/toolbar';
import Figures from 'components/compound/figures';
import Screen from 'components/compound/screen';

const App: React.FC = () => (
  <AppState>
    <Theme>
      <ToolbarState>
        <FiguresState>
          <GlobalStyle />
          <Container>
            <Toolbar />
            <Figures />
            <Screen />
          </Container>
        </FiguresState>
      </ToolbarState>
    </Theme>
  </AppState>
);

export { App };
