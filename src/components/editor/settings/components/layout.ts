import styled from '../../../../styles/styledComponents';
import { mediaMixin } from '../../../../styles/mixins';

export const GradientListWrapper = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: .5em;
  margin: 0;
  width: 100%;
  height: auto;
`;

export const GradientListItemHeader = styled.header`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.main_300};
`;

export const ControlsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => mediaMixin(props.theme, {
  sm: `flex-direction: row;`,
  md: `flex-direction: column;`,
})}
  .settingsControlInputs {
    ${props => mediaMixin(props.theme, {
  sm: `
        margin: 0 0.25em;
      `,
  md: `
        margin: .25em 0;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      `,
})}
  }
`;
