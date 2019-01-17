import styled from '../../styles/styledComponents';
import { modularSize } from '../../styles/typography';

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
