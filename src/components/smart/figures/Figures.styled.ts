import styled from '../../theme/styledComponents';
import { setLightness } from 'polished';

export const StyledContainer = styled.div`
  width: 250px;
  height: calc(100vh - 60px);
  background-color: ${(props): string => setLightness(0.1, props.theme.colors.background)};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px 20px;
`;
