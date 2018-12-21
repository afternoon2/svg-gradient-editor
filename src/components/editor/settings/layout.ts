import styled from '../../../styles/styledComponents';

export const SettingsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: inherit;
  h6 {
    margin: 0 0 .2em 0;
  }
`;

export const SettingsHeader = styled.header`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_200};
  padding: .5em;
  display: flex;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: 50px;
    height: inherit;
    flex-direction: column;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
  }
`;

export const IconButton = styled.button`
  padding: .3em;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
