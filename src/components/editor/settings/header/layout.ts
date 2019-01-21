import styled from '../../../../styles/styledComponents';

export const SHeader = styled.header`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_200};
  padding: .5em;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
`;