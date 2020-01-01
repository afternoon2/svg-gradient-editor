import { setLightness } from 'polished';
import styled from '../../theme/styledComponents';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props): string => setLightness(0.15, props.theme.colors.background)};
`;

export default Container;
