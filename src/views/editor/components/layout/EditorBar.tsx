import styled from '../../../../styles/styledComponents';

export const EditorBar = styled.aside`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colors.main_300};
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 140px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.sm + 1}px) {
    position: relative;
    right: 0;
    top: 0;
    min-height: 100vh;
    min-width: 400px;
    max-width: 400px;
  }
`;
