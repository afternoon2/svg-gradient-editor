import * as React from 'react';
import { connect } from 'react-redux';
import { idList } from '../../../store/editor/selectors';
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
  gradients: idList(state),
});

export const FiguresRenderer = connect(
  mapStateToProps,
  null,
)(FiguresRendererComponent);