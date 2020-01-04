import React from 'react';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import ToolbarContext from '../../../context/toolbar/context';
import RadioIcon from 'components/common/radio_icon';
import { StyledTools } from './Toolbar.styled';
import { ToolName } from 'context/toolbar/types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import Separator from 'components/common/separator';
import Header from 'components/common/header';
import Tooltip from 'components/common/tooltip';

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
    <Header>
      <StyledTools>
        <Tooltip direction="bottom" content="Select">
          <RadioIcon
            checked={localSelectedName === 'select'}
            icon={faMousePointer}
            id="select_tool"
            name={FORM_NAME}
            size={RADIO_SIZE}
            value="select"
            onChange={handleChange}
          />
        </Tooltip>
        <Separator width="1px" height="30px" />
        <Tooltip direction="bottom" content="Rectangle">
          <RadioIcon
            checked={localSelectedName === 'rect'}
            icon={faSquare}
            id="rect_tool"
            name={FORM_NAME}
            size={RADIO_SIZE}
            value="rect"
            onChange={handleChange}
          />
        </Tooltip>
        <Tooltip direction="bottom" content="Circle">
          <RadioIcon
            checked={localSelectedName === 'circle'}
            icon={faCircle}
            id="circle_tool"
            name={FORM_NAME}
            size={RADIO_SIZE}
            value="circle"
            onChange={handleChange}
          />
        </Tooltip>
      </StyledTools>
    </Header>
  );
};

export default Toolbar;
