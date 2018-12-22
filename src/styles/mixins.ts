import { AppTheme } from './themes';

export const mediaMixin = (theme: AppTheme, contents: { sm: string, md: string }): string => `
  @media screen and (max-width: ${theme.breakpoints.sm}px) {
    ${contents.sm}
  }
  @media screen and (min-width: ${theme.breakpoints.sm + 1}px) {
    ${contents.md}
  }
`;
