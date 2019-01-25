import * as React from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';
import { blendMode, localBlendModeObjects } from '../../../store/editor/selectors';
import { BlendMode, BlendModeObject } from '../../../store/_types';

type FiltersRendererComponentProps = {
  mode: BlendMode,
  localBlendModes: BlendModeObject[],
};

export const FiltersRendererComponent = (props: FiltersRendererComponentProps) => {
  const { mode, localBlendModes } = props;
  return (
    <React.Fragment>
      <filter id="blendMode">
        <feBlend
          in="sourceGraphic"
          in2="FillPaint"
          mode={mode}
        />
      </filter>
      {
        localBlendModes.map((blendModeObj: BlendModeObject) => (
          <filter
            key={nanoid()}
            id={blendModeObj.id}
          >
            <feBlend
              in="FillPaint"
              mode={blendModeObj.mode}
            />
          </filter>
        ))
      }
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  mode: blendMode(state),
  localBlendModes: localBlendModeObjects(state),
});

export const FiltersRenderer = connect(
  mapStateToProps,
  null,
)(FiltersRendererComponent as React.ComponentType);
