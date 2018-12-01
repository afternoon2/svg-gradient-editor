import * as React from 'react';
import {  HomeMain } from './components/HomeLayout';
import { HomeContent } from './components/HomeContent';
import { HomeNav } from './components/HomeNav';

const Home = () => (
  <HomeMain>
    <HomeContent />
    <HomeNav />
  </HomeMain>
);

export { Home };
