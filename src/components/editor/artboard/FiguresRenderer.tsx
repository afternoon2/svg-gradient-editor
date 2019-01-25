import * as React from 'react';
import { connect } from 'react-redux';
import { idList, localBlendModes, localBlendModesIds } from '../../../store/editor/selectors';
import { BlendMode } from '../../../store/_types';
import nanoid from 'nanoid';

export type FiguresRendererProps = {
  gradients: string[],
  blendModeIds: string[],
};

const FiguresRendererComponent = (props: FiguresRendererProps): JSX.Element => {
  return (
    <g filter="url(#blendMode)">
      {
        props.gradients.map(
          (gradient: string) => {
            const key: string = nanoid();
            return (
              <rect
                key={key}
                id={key}
                x={0}
                y={0}
                width="100%"
                height="100%"
                fill={`url(#${gradient})`}
                filter={`url(#${props.blendModeIds[props.gradients.indexOf(gradient)]})`}
              />
            )
          },
        )
      }
    </g>
  );
};

const mapStateToProps = (state: any) => ({
  gradients: idList(state),
  blendModeIds: localBlendModesIds(state),
});

export const FiguresRenderer = connect(
  mapStateToProps,
  null,
)(FiguresRendererComponent as React.ComponentType);