import * as React from 'react';
import { SettingsWrapper } from './layout';
import { SettingsHeader } from './header/SettingsHeader';
import { SettingsContent } from './content/SettingsContent';

export const Settings = () => (
  <SettingsWrapper>
    <SettingsHeader />
    <SettingsContent />
  </SettingsWrapper>
);

