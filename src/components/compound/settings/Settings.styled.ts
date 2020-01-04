import styled from 'styled';
import { setLightness } from 'polished';

export const StyledContainer = styled.div`
  position: absolute;
  top: 60px;
  left: calc(100% - 204px);
  width: 204px;
  height: calc(100% - 60px);
  background-color: ${(props): string => setLightness(0.14, props.theme.colors.background)};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: hidden;
`;
