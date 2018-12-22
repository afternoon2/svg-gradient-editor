import styled from '../../../styles/styledComponents';
import { modularSize } from '../../../styles/typography';
import { mediaMixin } from '../../../styles/mixins';

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
  ${props => mediaMixin(props.theme, {
    sm: 'flex-direction: column;',
    md: 'flex-direction: row;',
  })}
`;

export const NavMenuItem = styled.li`
  box-sizing: border-box;
  text-align: center;
  padding: .5em;
  margin: .5em;
  color: blue;
  text-transform: uppercase;
  font-size: ${modularSize(0.5)};
  ${props => mediaMixin(props.theme, {
    sm: 'width: 100%;',
    md: 'width: 50%;',
  })}
`;
