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
import Settings from 'components/compound/settings';
import SvgState from 'components/states/svg';

const App: React.FC = () => (
  <AppState>
    <ToolbarState>
      <FiguresState>
        <SvgState>
          <Theme>
            <GlobalStyle />
            <Container>
              <Toolbar />
              <Figures />
              <Screen />
              <Settings />
            </Container>
          </Theme>
        </SvgState>
      </FiguresState>
    </ToolbarState>
  </AppState>
);

export { App };
