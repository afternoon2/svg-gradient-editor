import styled from '../../styles/styledComponents';

export const TextInput = styled.input`
  width: ${props => props.width || '100%'};
  height: 35px;
  box-sizing: border-box;
  padding: .5em;
  border: 1px solid ${props => props.theme.colors.main_200};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.main_400};
  &::placeholder {
    color: ${props => props.theme.colors.text};
    opacity: 0.5;
  }
  &:focus {
    outline: 1px solid ${props => props.theme.colors.main_100};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.main_400};
    opacity: 0.5;
  }
  &:disabled:hover {
    cursor: not-allowed;
  }
`;
