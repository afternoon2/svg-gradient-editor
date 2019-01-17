import styled from '../../../../styles/styledComponents';
import { mediaMixin } from '../../../../styles/mixins';

export const SContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.23);
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => mediaMixin(props.theme, {
  sm: `
      height: calc(280px - 40px);
    `,
  md: `
      height: 95vh;
    `,
})}
`;

export const ContentList = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: .5em;
  margin: 0;
  width: 100%;
  height: auto;
`;