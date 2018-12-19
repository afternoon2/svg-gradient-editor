import * as React from 'react';
import styled from '../../../styles/styledComponents';
import { SettingsNav } from './components/nav/SettingsNav';
import { SettingsContent } from './components/content/SettingsContent';

const SettingsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: .5em;
  h6 {
    margin: 0 0 .2em 0;
  }
`;

const Settings = () => (
  <SettingsWrapper>
    <SettingsNav />
    <SettingsContent />
  </SettingsWrapper>
);

export { Settings };
