import * as React from 'react';
import { ViewWrapper } from '../../components/layout/ViewWrapper';
import {  HomeMain } from './components/HomeLayout';
import { HomeContent } from './components/HomeContent';
import { HomeNav } from './components/HomeNav';

const Home = () => (
  <ViewWrapper>
    <HomeMain>
      <HomeContent />
      <HomeNav />
    </HomeMain>
  </ViewWrapper>
);

export { Home };
