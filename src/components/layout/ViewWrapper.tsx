import styled from '../../styles/styledComponents';
import { AppTheme } from '../../styles/themes';

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
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.md + 1}px) {
    max-width: 1440px;
  }
`;

export { ViewWrapper };