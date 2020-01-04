import React from 'react';
import styled from 'styled';
import { modularScale } from 'polished';
import { AppTheme } from 'themes';

interface Props {
  level: number;
}

const hS: { [key: string]: number } = {
  1: 4,
  2: 3,
  3: 2,
  4: 1,
  5: 0.75,
  6: 0.5,
};

const headingStyles = (theme: AppTheme, headingLevel: number): string => `
  color: ${theme.colors.textPrimary};
  font-size: ${modularScale(hS[headingLevel])};
  font-family: ${theme.font};
  font-weight: ${theme.weight.bold};
`;

const Heading1 = styled.h1`
  ${(props): string => headingStyles(props.theme, 1)}
`;
const Heading2 = styled.h2`
  ${(props): string => headingStyles(props.theme, 2)}
`;
const Heading3 = styled.h3`
  ${(props): string => headingStyles(props.theme, 3)}
`;
const Heading4 = styled.h4`
  ${(props): string => headingStyles(props.theme, 4)}
`;
const Heading5 = styled.h5`
  ${(props): string => headingStyles(props.theme, 5)}
`;
const Heading6 = styled.h6`
  ${(props): string => headingStyles(props.theme, 6)}
`;

const Heading: React.FC<Props> = ({ level, children }) => {
  switch (level) {
    case 1:
      return <Heading1>{children}</Heading1>;
    case 2:
      return <Heading2>{children}</Heading2>;
    case 3:
      return <Heading3>{children}</Heading3>;
    case 4:
      return <Heading4>{children}</Heading4>;
    case 5:
      return <Heading5>{children}</Heading5>;
    case 6:
      return <Heading6>{children}</Heading6>;
    default:
      return <Heading1>{children}</Heading1>;
  }
};

export default Heading;
