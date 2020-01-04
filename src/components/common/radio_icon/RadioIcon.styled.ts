import styled from 'styled';

export const StyledLabel = styled.label`
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const StyledRadio = styled.input.attrs((): { [key: string]: string | Function | boolean } => ({
  type: 'radio',
}))`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  & + svg {
    cursor: pointer;
  }
`;
