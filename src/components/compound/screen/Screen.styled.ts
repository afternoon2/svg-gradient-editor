import styled from 'styled';
import { setLightness } from 'polished';

export const StyledContainer = styled.main`
  position: absolute;
  top: 60px;
  left: 250px;
  width: calc(100% - 250px - 204px);
  height: calc(100% - 60px);
  background-color: ${(props): string => setLightness(0.2, props.theme.colors.background)};
  overflow: auto;
`;
