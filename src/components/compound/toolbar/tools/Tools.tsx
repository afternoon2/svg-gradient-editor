import React from 'react';
import { ToolName } from 'context/toolbar/types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { StyledTools } from '../Toolbar.styled';
import Tooltip from 'components/common/tooltip';
import RadioIcon from 'components/common/radio_icon';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import Separator from 'components/common/separator';
import ToolbarContext from 'context/toolbar/context';

interface Props {
  iconSize: SizeProp;
}

const Tools: React.FC<Props> = ({ iconSize }) => {
  const FORM_NAME = 'selectedTool';
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
    <StyledTools>
      <Tooltip direction="bottom" content="Select">
        <RadioIcon
          checked={localSelectedName === 'select'}
          icon={faMousePointer}
          id="select_tool"
          name={FORM_NAME}
          size={iconSize}
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
          size={iconSize}
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
          size={iconSize}
          value="circle"
          onChange={handleChange}
        />
      </Tooltip>
    </StyledTools>
  );
};

export default Tools;
