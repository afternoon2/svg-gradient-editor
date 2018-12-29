import * as React from 'react';
import styled from '../../../../../../styles/styledComponents';
import { modularSize } from '../../../../../../styles/typography';
import { rgba } from 'polished';

const FFieldset = styled.fieldset`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 0.5em;
  border: 1px solid ${props => rgba(props.theme.colors.text, 0.45)};
  border-radius: 3px;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
`;

const FLegend = styled.legend`
  box-sizing: border-box;
  padding: .3em;
  background-color: ${props => props.theme.colors.main_400};
  border: ${props => props.theme.colors.text};
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  font-size: ${modularSize(-1)};
`;

export type FormFieldsetProps = {
  legend: string,
  children?: React.ReactNode,
};

export const FormFieldset = (props: FormFieldsetProps) => {
  const { legend, children } = props;
  return (
    <FFieldset>
      <FLegend>{legend}</FLegend>
      {children}
    </FFieldset>
  );
};
