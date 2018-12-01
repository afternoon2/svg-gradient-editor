import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MainNav,
  NavMenu,
  NavMenuItem,
} from './HomeLayout';

export const HomeNav = () => (
  <MainNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink to="/">
          Editor
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/">
          API
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </MainNav>
);
