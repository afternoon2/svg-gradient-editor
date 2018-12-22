import { darken } from 'polished';
import styled from '../../../styles/styledComponents';
import { mediaMixin } from '../../../styles/mixins';

export const SettingsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: inherit;
  display: flex;
  ${props => mediaMixin(props.theme, {
    sm: 'flex-direction: row',
    md: 'flex-direction: column;'
  })}
  h6 {
    margin: 0 0 .2em 0;
  }
`;

export const SettingsHeader = styled.header`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_200};
  padding: .5em;
  display: flex;
  justify-content: space-around;
  ${props => mediaMixin(props.theme, {
    sm: `
      width: 50px;
      height: inherit;
      flex-direction: column;
    `,
    md: `
      width: 100%;
      height: 50px;
      flex-direction: row;
    `,
  })}
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

export const SettingsContent = styled.div`
  width: auto;
  box-sizing: border-box;
  height: auto;
  display: flex;
  ${props => mediaMixin(props.theme, {
    sm: `
      flex-direction: row;
      overflow-y: auto;
    `,
    md: `
      flex-direction: column;
    `,
  })}
`;

type SmallButtonProps = {
  width: string;
};

export const SmallButton = styled.button<SmallButtonProps>`
  width: ${props => props.width};
  height: 35px;
  box-sizing: border-box;
  padding: .5em;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  transition: 120ms all ease-in-out;
  &:focus {
    outline: 1px solid ${props => props.theme.colors.main_100};
  }
  &:hover {
    cursor: pointer;
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }
`;
