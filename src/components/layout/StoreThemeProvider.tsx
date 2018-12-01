import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { darkTheme, lightTheme } from '../../styles/themes';

type StoreThemeProviderProps = {
  theme: 'dark' | 'light';
  children: any;
};

const $StoreThemeProvider = (
  props: StoreThemeProviderProps
): React.ReactNode => (
  <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
    {props.children}
  </ThemeProvider>
);

const mapStateToProps = (state: any) => ({
  theme: state.application.theme,
});

export const StoreThemeProvider = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)($StoreThemeProvider as React.ComponentType);
