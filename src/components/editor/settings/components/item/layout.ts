import styled from '../../../../../styles/styledComponents';
import { mediaMixin } from '../../../../../styles/mixins';

export const ListItemWrapper = styled.li`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: .5em 0;
  &:first-child {
    margin: 0 0 .5em 0;
  }
  &:last-child {
    margin: .5em 0 0 0;
  }
  ${props => mediaMixin(props.theme, {
  sm: `
      width: auto;
      height: 100%;
    `,
  md: `
      width: 100%;
      height: auto;
    `,
})}
`;

export const WrapperHeader = styled.header`
  background-color: ${props => props.theme.colors.main_200};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .25em;
  transition: 120ms all ease-in-out;
  ${props => mediaMixin(props.theme, {
    sm: `
      width: 35px;
      height: 100%;
      flex-direction: column;
    `,
    md: `
      width: 100%;
      height: 35px;
      flex-direction: row;
    `,
  })}
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
  ${props => mediaMixin(props.theme, {
    sm: `
      width: 35px;
      height: 100%;
    `,
    md: `
      width: 35px;
      height: 35px;
    `,
  })}
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
  ${props => mediaMixin(props.theme, {
    sm: `
      width: auto;
      height: 100%;
      border-radius: 0 4px 4px 0;
    `,
    md: `
      width: 100%;
      height: auto;
      border-radius: 0 0 4px 4px;
    `,
  })}
`;
