import styled from 'styled';

export const StyledNav = styled.nav`
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
