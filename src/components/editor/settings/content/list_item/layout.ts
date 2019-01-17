import styled from '../../../../../styles/styledComponents';

export const Item = styled.li`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: .5em 0;
  width: 100%;
  height: auto;
`;

export const ItemHeader = styled.header`
  background-color: ${props => props.theme.colors.main_200};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .25em;
  transition: 120ms all ease-in-out;
  width: 100%;
  height: 35px;
`;

export const ItemContent = styled.main`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_400};
  border: 2px solid ${props => props.theme.colors.main_200};
  padding: .5em;
  display: ${props => props.hidden ? 'none' : 'flex'};
  width: 100%;
  height: auto;
  border-radius: 0 0 4px 4px;
  flex-direction: column;
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

type HeaderLinkProps = {
  danger?: boolean;
};

export const HeaderLink = styled.a<HeaderLinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.danger ? props.theme.colors.danger : props.theme.colors.text};
  width: 35px;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
