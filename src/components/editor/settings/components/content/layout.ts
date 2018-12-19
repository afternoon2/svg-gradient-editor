import styled from '../../../../../styles/styledComponents';

export const Content = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding-top: .5em;
  display: flex;
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: row;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    flex-direction: column;
  }
`;
