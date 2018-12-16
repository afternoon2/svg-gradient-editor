import * as React from 'react';
import styled from '../../../styles/styledComponents';

const SettingsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: .3em;
  h5 {
    margin: 0 0 .2em 0;
  }
`;

class Settings extends React.Component {
  public render(): React.ReactNode {
    return (
      <SettingsWrapper>
        <h5>Settings</h5>
      </SettingsWrapper>
    );
  }
}

export { Settings };
