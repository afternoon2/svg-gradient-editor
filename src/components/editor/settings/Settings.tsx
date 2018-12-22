import * as React from 'react';
import { SettingsWrapper, SettingsHeader, SettingsContent } from './layout';
import { GradientList } from './components/GradientList';
import { GradientListControls } from './components/GradientListControls';

export const Settings = () => (
  <SettingsWrapper>
    <SettingsHeader>
      <GradientListControls />
    </SettingsHeader>
    <SettingsContent>
      <GradientList />
    </SettingsContent>
  </SettingsWrapper>
);

