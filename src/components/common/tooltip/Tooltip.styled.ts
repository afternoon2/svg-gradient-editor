import styled, { css } from 'styled';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Direction } from './types';
import { setLightness, modularScale } from 'polished';

export const StyledWrapper = styled.div`
  display: inherit;
  position: relative;
`;

interface StyledContentProps {
  direction: Direction;
  distance?: number;
}

export const StyledContent = styled.p<StyledContentProps>`
  position: absolute;
  background-color: ${(props): string => setLightness(0.14, props.theme.colors.background)};
  border: none;
  border-radius: 4px;
  color: ${(props): string => props.theme.colors.textPrimary};
  z-index: 100;
  padding: 10px 15px;
  font-family: ${(props): string => props.theme.font};
  font-size: 12px;
  min-width: 50px;
  text-align: center;
  line-height: ${modularScale(1)};
  ${(props): FlattenSimpleInterpolation | string => {
    switch (props.direction) {
      case 'top':
        return css`
          bottom: calc(70% + ${props.distance || 0}px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'right':
        return css`
          left: calc(70% + ${props.distance || 0}px);
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'bottom':
        return css`
          top: calc(70% + ${props.distance || 0}px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return css`
          right: calc(70% + ${props.distance || 0}px);
          top: 50%;
          transform: translateY(-50%);
        `;
      default:
        return '';
    }
  }}
`;
