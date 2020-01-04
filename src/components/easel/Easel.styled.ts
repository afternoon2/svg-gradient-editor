import styled from 'styled';

export const StyledContainer = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCanvasContainer = styled.div`
  width: inherit;
  height: inherit;
  overflow: auto;
  position: relative;
`;
