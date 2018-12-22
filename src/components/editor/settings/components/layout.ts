import styled from '../../../../styles/styledComponents';
import { mediaMixin } from '../../../../styles/mixins';

export const GradientListWrapper = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: .5em;
  margin: 0;
  width: 100%;
  height: auto;
  display: flex;
  ${props => mediaMixin(props.theme, {
  sm: `
      flex-direction: row;
    `,
  md: `
    flex-direction: column;
    `,
})}
`;

export const GradientListItemWrapper = styled.li`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: .5em 0;
  &:first-child {
    margin: 0 0 .5em 0;
  }
  &:last-child {
    margin: .5em 0 0 0;
  }
  ${props => mediaMixin(props.theme, {
    sm: `
      width: auto;
      height: 100%;
    `,
    md: `
      width: 100%;
      height: auto;
    `,
  })}
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