import * as React from 'react';
import { default as styled } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

const ViewWrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  background-color: ${props => props.theme.main_400};
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
  @media screen and (min-width: ${breakpoints.md + 1}px) {
    max-width: 1440px;
  }
`;

export { ViewWrapper };