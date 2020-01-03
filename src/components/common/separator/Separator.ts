import styled from 'styled';
import { rgba } from 'polished';

interface Props {
  height?: string;
  width?: string;
  margin?: string;
}

const Separator = styled.div<Props>`
  margin: ${(props): string => props.margin || '10px'};
  width: ${(props): string => props.width || '100%'};
  height: ${(props): string => props.height || '1px'};
  background-color: ${(props): string => rgba(props.theme.colors.textPrimary, 0.4)};
`;

export default Separator;
