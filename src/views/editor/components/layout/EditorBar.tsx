import styled from '../../../../styles/styledComponents';
import { mediaMixin } from '../../../../styles/mixins';

export const EditorBar = styled.aside`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colors.main_300};
  ${props => mediaMixin(props.theme, {
    sm: `
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 180px;
    `,
    md: `
      position: relative;
      right: 0;
      top: 0;
      min-height: 100vh;
      min-width: 400px;
      max-width: 400px;
    `
  })}
`;
