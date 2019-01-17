import * as React from 'react';
import { EditorMain } from './components/layout/EditorMain';
import { EditorArea } from './components/layout/EditorArea';
import { EditorBar } from './components/layout/EditorBar';
import { HomeLink } from '../../components/routing/HomeLink';
import { Settings } from '../../components/editor/settings/Settings';

export const Editor = () => {
  return (
    <EditorMain>
      <HomeLink />
      <EditorArea>
      </EditorArea>
      <EditorBar>
        <Settings />
      </EditorBar>
    </EditorMain>
  );
}
