import styled from '../../../../../../../styles/styledComponents';
import { modularSize } from '../../../../../../../styles/typography';

export const GradientListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: row;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: .5em;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: row;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
`;

export const ListButton = styled.button`
  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: 200px;
  }
  @media (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    width: 50%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  background-color: ${props => {
    return props.className === 'primary' ?
      props.theme.colors.primary :
      props.theme.colors.danger;
  }};
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: ${modularSize(-2)};
  &:hover {
    cursor: pointer;
  }
`;