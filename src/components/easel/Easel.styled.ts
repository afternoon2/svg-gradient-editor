import styled from 'styled';
import { setLightness } from 'polished';

export interface EaselProps {
  background?: string;
  width?: string;
  height?: string;
}

const StyledEasel = styled.div<EaselProps>`
  background-color: ${(props): string => props.background || setLightness(0.25, props.theme.colors.background)};
  box-sizing: border-box;
  width: ${(props): string => props.width ? props.width : '100%'};
  height: ${(props): string => props.height ? props.height : '100%'};
  min-width: 800px;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledEasel;
