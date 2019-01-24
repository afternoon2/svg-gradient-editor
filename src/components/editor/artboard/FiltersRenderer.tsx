import * as React from 'react';
import { connect } from 'react-redux';
import { blendMode } from '../../../store/editor/selectors';
import { BlendMode } from '../../../store/_types';

type FiltersRendererComponentProps = {
  mode: BlendMode,
};

export const FiltersRendererComponent = (props: FiltersRendererComponentProps) => {
  const { mode } = props;
  return (
    <filter id="blendMode">
      <feBlend
        in="sourceGraphic"
        mode={mode}
      />
    </filter>
  );
};

const mapStateToProps = (state: any) => ({
  mode: blendMode(state),
});

export const FiltersRenderer = connect(
  mapStateToProps,
  null,
)(FiltersRendererComponent);
