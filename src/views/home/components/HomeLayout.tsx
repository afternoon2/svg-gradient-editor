import { default as styled } from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints';
import { modularSize } from '../../../styles/typography';

export const HomeMain = styled.main`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const MainContent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const MainNav = styled.nav`
  width: 20%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavMenu = styled.ul`
  width: 100%;
  max-width: 450px;
  margin: 0;
  padding: 1em 0 0 0;
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
  @media (min-width: ${breakpoints.sm + 1}px) {
    flex-direction: row;
  }
`;

export const NavMenuItem = styled.li`
  box-sizing: border-box;
  text-align: center;
  padding: .5em;
  margin: .5em;
  color: blue;
  text-transform: uppercase;
  font-size: ${modularSize(0.5)};
  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
  @media screen and (min-width: ${breakpoints.sm + 1}px) {
    width: 50%;
  }
`;
