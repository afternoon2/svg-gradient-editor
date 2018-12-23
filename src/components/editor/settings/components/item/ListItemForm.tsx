import * as React from 'react';
import Dropdown from 'react-dropdown';
import Switch from 'react-switch';
import { withTheme } from 'styled-components';
import styled from '../../../../../styles/styledComponents';
import { modularSize } from '../../../../../styles/typography';
import { Gradient } from '../../../../../store/editor/_gradientTypes';
import { AppTheme } from '../../../../../styles/themes';

const ItemRow = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: .5em;
  .setType {
    min-width: 200px;
    height: 35px;
  }
`;

const ItemRowLabel = styled.label`
  font-size: ${modularSize(-1)};
  padding-right: .5em;
`;

export type ListItemFormProps = {
  gradient: Gradient,
  theme?: AppTheme,
};

export const ListItemForm = withTheme((props: ListItemFormProps) => {

  const { gradient, theme } = props;

  const [ options ] = React.useState([
    { value: 'linear', label: 'Linear' },
    { value: 'radial', label: 'Radial' },
  ]);

  const getColor = (state: 'on' | 'off'): string => {
    if (state === 'on') {
      return (theme as AppTheme).colors.primary;
    }
    return (theme as AppTheme).colors.main_100;
  }

  const renderFocalPointsSwitch = () => (
    gradient.type === 'radial' ?
      <ItemRow>
        <ItemRowLabel>
          Focal points
      </ItemRowLabel>
        <Switch
          checked={gradient.focalPoints}
          onChange={() => { }}
          checkedIcon={false}
          uncheckedIcon={false}
          width={35}
          height={20}
          onColor={getColor('on')}
          offColor={getColor('off')}
        ></Switch>
      </ItemRow>
      : null
  );

  return (
    <React.Fragment>
      <ItemRow>
        <ItemRowLabel>
          Type
        </ItemRowLabel>
        <Dropdown
          controlClassName="setType"
          value={gradient.type}
          options={options}
          placeholder="Set type"
        />
      </ItemRow>
      {renderFocalPointsSwitch()}
    </React.Fragment>
  );
});
