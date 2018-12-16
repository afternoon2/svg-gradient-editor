import * as React from 'react';
import { EditorMain } from './components/layout/EditorMain';
import { EditorArea } from './components/layout/EditorArea';
import { EditorBar } from './components/layout/EditorBar';
import { HomeLink } from '../../components/routing/HomeLink';
import { Artboard } from '../../components/editor/artboard/Artboard';
import { Settings } from '../../components/editor/settings/Settings';

export const Editor = () => (
  <EditorMain>
    <HomeLink />
    <EditorArea>
      <Artboard />
    </EditorArea>
    <EditorBar>
      <Settings />
    </EditorBar>
  </EditorMain>
);
