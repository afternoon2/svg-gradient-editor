import styled from '../../../../styles/styledComponents';

export const EditorMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    flex-direction: row;
  }
`;
