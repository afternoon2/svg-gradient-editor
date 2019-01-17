import styled from '../../../../../../../styles/styledComponents';
import { modularSize } from '../../../../../../../styles/typography';

type ColorSampleProps = {
  background: string,
};

export const CSample = styled.div<ColorSampleProps>`
  width: 40px;
  height: 40px;
  background-color: ${props => props.background};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;


export const CWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  padding: .5em;
`;

export const CName = styled.span`
  width: 50%;
  font-size: ${modularSize(-1.65)};
  box-sizing: border-box;
  margin-left: .5em;
  padding-right: 1em;
`;

export const CManager = styled.div`
  width: 30%;
  display: flex;
  box-sizing: border-box;
`;

export const CLink = styled.a`
  font-size: ${modularSize(-1.65)};
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export const CPickerWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 3em;
  top: 3em;
  .sketch-picker input {
    color: #212121 !important;
  }
`;