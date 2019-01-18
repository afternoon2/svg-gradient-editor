import * as React from 'react';
import { EditorMain } from './components/layout/EditorMain';
import { EditorArea } from './components/layout/EditorArea';
import { EditorBar } from './components/layout/EditorBar';
import { Settings } from '../../components/editor/settings/Settings';
import { Artboard } from '../../components/editor/artboard/Artboard';

export const Editor = () => {
  return (
    <EditorMain>
      <EditorArea>
        <Artboard />
      </EditorArea>
      <EditorBar>
        <Settings />
      </EditorBar>
    </EditorMain>
  );
}
