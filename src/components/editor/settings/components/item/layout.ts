import styled from '../../../../../styles/styledComponents';
import { modularSize } from '../../../../../styles/typography';

export const ListItemWrapper = styled.li`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: .5em 0;
  width: 100%;
  height: auto;
`;

export const WrapperHeader = styled.header`
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

export const WrapperContent = styled.main`
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

export const FormRow = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: .5em;
  h5 {
    font-size: ${modularSize(-1.2)};
    margin: 0;
  }
`;

export const FormLabel = styled.label`
  font-size: ${modularSize(-1.65)};
  padding-right: .5em;
  min-width: 30px;
`;
