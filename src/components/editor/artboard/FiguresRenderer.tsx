import * as React from 'react';
import { connect } from 'react-redux';
import { Gradient } from '../../../store/_types';
import nanoid from 'nanoid';

export type FiguresRendererProps = {
  gradients: string[],
};

const FiguresRendererComponent = (props: FiguresRendererProps): JSX.Element => {
  return (
    <g>
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
              />
            )
          },
        )
      }
    </g>
  );
};

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients.map((gradient: Gradient) => gradient.id),
});

export const FiguresRenderer = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(FiguresRendererComponent);