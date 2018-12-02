import styled from '../../../../styles/styledComponents';

export const EditorArea = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* height: 100%; */
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    width: calc(100% - 300px);
  }
`;