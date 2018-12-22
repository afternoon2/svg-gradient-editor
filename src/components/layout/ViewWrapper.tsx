import styled from '../../styles/styledComponents';
import { AppTheme } from '../../styles/themes';
import { mediaMixin } from '../../styles/mixins';

export type ViewWrapperProps = {
  theme: AppTheme,
};

const ViewWrapper = styled.div<ViewWrapperProps>`
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_400};
  ${props => mediaMixin(props.theme, {
    sm: `width: 100%;`,
    md: `max-width: 1440px;`,
  })}
`;

export { ViewWrapper };