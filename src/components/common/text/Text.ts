import styled from 'styled';
import { modularScale } from 'polished';

interface Props {
  size: 'xsmall' | 'small' | 'medium';
}

const Text = styled.span<Props>`
  font-family: ${(props): string => props.theme.font};
  font-size: ${(props): string => {
    let size: number;
    switch (props.size) {
      case 'xsmall':
        size = 0.2;
        break;
      case 'small':
        size = 0.3;
        break;
      case 'medium':
        size = 0.4;
        break;
      default:
        size = 0.4;
        break;
    }
    return modularScale(size);
  }};
  font-weight: ${(props): string => `${props.theme.weight.normal}`};
  margin: 0;
  padding: 0;
  line-height: 1.2;
`;

export default Text;
