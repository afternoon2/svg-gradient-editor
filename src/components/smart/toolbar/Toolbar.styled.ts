import styled from 'components/theme/styledComponents';

export const StyledNav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${(props): string => props.theme.colors.background};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const StyledTools = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
