import styled from '../../../../styles/styledComponents';
import { mediaMixin } from '../../../../styles/mixins';

export const EditorArea = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${props => mediaMixin(props.theme, {
    sm: 'width: 100%;', md: 'width: calc(100% - 400px);'
  })}
`;