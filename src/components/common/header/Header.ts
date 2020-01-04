import styled from 'styled';

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props): string => props.theme.colors.background};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export default Header;
