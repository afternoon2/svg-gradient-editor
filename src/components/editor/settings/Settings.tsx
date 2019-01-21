import * as React from 'react';
import nanoid from 'nanoid';
import { SettingsWrapper } from './layout';
import { SettingsHeader } from './header/SettingsHeader';
import { SettingsContent } from './content/SettingsContent';

export const Settings = () => {
  const presetRootId: string = nanoid();
  return (
    <SettingsWrapper id={presetRootId}>
      <SettingsHeader presetRootId={presetRootId} />
      <SettingsContent />
    </SettingsWrapper>
  )
};

