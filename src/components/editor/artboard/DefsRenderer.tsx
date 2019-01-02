import * as React from 'react';
import { connect } from 'react-redux';
import nanoid from 'nanoid';
import { Gradient, OutputColor, InputColor } from '../../../store/editor/_gradientTypes';

export type DefsRendererProps = {
  gradients: Gradient[],
};

const SVGGradient = (props: { gradient: Gradient }): JSX.Element => {
  const renderStops = () => {
    if (props.gradient.useChroma) {
      return props.gradient.output.map(
        (color: OutputColor) => (
          <stop
            key={nanoid()}
            offset={color.offset}
            stopColor={color.color}
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
  }
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
    return (
      <radialGradient
        gradientUnits="objectBoundingBox"
        id={props.gradient.id}
        {...props.gradient.attributes}
      >
        {renderStops()}
      </radialGradient>
    )
  }
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