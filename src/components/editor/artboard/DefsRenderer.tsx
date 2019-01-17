import * as React from 'react';
import { connect } from 'react-redux';
import nanoid from 'nanoid';
import { Gradient, OutputColor, InputColor, RadialGradientAttributes } from '../../../store/_types';

const SVGGradient = (props: { gradient: Gradient }): JSX.Element => {
  const renderStops = () => {
    if (props.gradient.useChroma) {
      return props.gradient.output.map(
        (color: OutputColor) => (
          <stop
            key={nanoid()}
            offset={`${color.offset}%`}
            stopColor={`rgba(${color.color[0]}, ${color.color[1]}, ${color.color[2]}, ${color.color[3]})`}
          />
        )
      )
    } else {
      return props.gradient.colors.map(
        (color: InputColor) => (
          <stop
            key={color.id}
            stopColor={`rgba(${color.color[0]}, ${color.color[1]}, ${color.color[2]}, ${color.color[3]})`}
            offset={`${props.gradient.colors.indexOf(color) * (100 / props.gradient.colors.length)}%`}
          />
        )
      )
    }
  };
  if (props.gradient.type === 'linear') {
    return (
      <linearGradient
        gradientUnits="objectBoundingBox"
        id={props.gradient.id}
        {...props.gradient.attributes}
      >
        {renderStops()} 
      </linearGradient>
    );
  } else {
    const {
      cx, cy, r, fx, fy, spreadMethod
    } = props.gradient.attributes as RadialGradientAttributes;
    // @ts-ignore
    const _spreadMethod = spreadMethod === 'none' ? undefined : spreadMethod;
    return (
      <radialGradient
        gradientUnits="objectBoundingBox"
        id={props.gradient.id}
        cx={cx}
        cy={cy}
        r={r}
        fx={props.gradient.focalPoints ? fx : undefined}
        fy={props.gradient.focalPoints ? fy : undefined}
        spreadMethod={_spreadMethod as ('pad' | 'repeat' | 'reflect')}
      >
        {renderStops()}
      </radialGradient>
    )
  }
};

export type DefsRendererProps = {
  gradients: Gradient[],
};

const DefsRendererComponent = (props: DefsRendererProps) => {
  return (
    <defs>
      {props.gradients.map((gradient: Gradient) => (
        <SVGGradient
          key={gradient.id}
          gradient={gradient}
        />
      ))}
    </defs>
  );
};

const mapStateToProps = (state: any) => ({
  gradients: state.editor.settings.gradients,
});

export const DefsRenderer = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(DefsRendererComponent)