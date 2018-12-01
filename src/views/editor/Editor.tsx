import * as React from 'react';
import { EditorMain } from './components/layout/EditorMain';
import { HomeLink } from '../../components/routing/HomeLink';

export const Editor = () => (
  <EditorMain>
    <HomeLink />
    <h1>Editor goes here</h1>
  </EditorMain>
);
