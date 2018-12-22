import styled from '../../../../styles/styledComponents';
import { mediaMixin } from '../../../../styles/mixins';

export const EditorMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${props => mediaMixin(props.theme, {
    sm: 'flex-direction: column;',
    md: 'flex-direction: row;'
  })}
`;
