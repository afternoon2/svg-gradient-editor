import React from 'react';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import ToolbarContext from '../../../context/toolbar/context';
import IconRadio from 'components/common/icon-radio';
import { StyledNav, StyledTools } from './Toolbar.styled';
import { ToolName } from 'context/toolbar/types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import Separator from 'components/common/separator';

const Toolbar: React.FC = () => {
  const FORM_NAME = 'selectedTool';
  const RADIO_SIZE: SizeProp = 'lg';
  const {
    state: { selectedToolName },
    dispatch,
  } = React.useContext(ToolbarContext);
  const [localSelectedName, setLocalSelectedName] = React.useState<ToolName>(selectedToolName);

  React.useEffect(() => {
    setLocalSelectedName(selectedToolName);
  }, [selectedToolName]);

  const handleChange = React.useCallback(
    (value: string) => {
      dispatch({
        type: 'SET_SELECTED_TOOL_NAME',
        payload: value as ToolName,
      });
    },
    [dispatch],
  );

  return (
    <StyledNav>
      <StyledTools>
        <IconRadio
          checked={localSelectedName === 'select'}
          icon={faMousePointer}
          id="select_tool"
          name={FORM_NAME}
          size={RADIO_SIZE}
          value="select"
          onChange={handleChange}
        />
        <Separator width="1px" height="30px" />
        <IconRadio
          checked={localSelectedName === 'rect'}
          icon={faSquare}
          id="rect_tool"
          name={FORM_NAME}
          size={RADIO_SIZE}
          value="rect"
          onChange={handleChange}
        />
        <IconRadio
          checked={localSelectedName === 'circle'}
          icon={faCircle}
          id="circle_tool"
          name={FORM_NAME}
          size={RADIO_SIZE}
          value="circle"
          onChange={handleChange}
        />
      </StyledTools>
    </StyledNav>
  );
};

export default Toolbar;
