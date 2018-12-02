import * as React from 'react';
import { EditorMain } from './components/layout/EditorMain';
import { EditorArea } from './components/layout/EditorArea';
import { EditorBar } from './components/layout/EditorBar';
import { HomeLink } from '../../components/routing/HomeLink';

export const Editor = () => (
  <EditorMain>
    <HomeLink />
    <EditorArea />
    <EditorBar />
  </EditorMain>
);
