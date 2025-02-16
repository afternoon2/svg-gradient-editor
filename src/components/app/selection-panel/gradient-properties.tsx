import {
  LinearGradientAttributes,
  RadialGradientAttributes,
} from "@/state/types";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import CheckboxRow from "@/components/app/checkbox-row";
import SliderRow from "@/components/app/slider-row";
import { useSetAtom } from "jotai";
import { FC } from "react";

export const LinearGradientProperties: FC<{
  gradientId: string;
  attrs: LinearGradientAttributes;
}> = ({ gradientId, attrs }) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  return (
    <>
      <SliderRow
        title="x1"
        min={-1}
        max={1}
        step={0.01}
        value={[attrs.x1]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_LINEAR_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                x1: newValues[0],
              },
            },
          });
        }}
      />
      <SliderRow
        title="y1"
        min={-1}
        max={1}
        step={0.01}
        value={[attrs.y1]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_LINEAR_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                y1: newValues[0],
              },
            },
          });
        }}
      />
      <SliderRow
        title="x2"
        min={-1}
        max={1}
        step={0.01}
        value={[attrs.x2]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_LINEAR_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                x2: newValues[0],
              },
            },
          });
        }}
      />
      <SliderRow
        title="y2"
        min={-1}
        max={1}
        step={0.01}
        value={[attrs.y2]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_LINEAR_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                y2: newValues[0],
              },
            },
          });
        }}
      />
    </>
  );
};

export const RadialGradientProperties: FC<{
  gradientId: string;
  attrs: RadialGradientAttributes;
}> = ({ gradientId, attrs }) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  return (
    <>
      <SliderRow
        title="cx"
        min={0}
        max={1}
        step={0.01}
        value={[attrs.cx]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_RADIAL_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                cx: newValues[0],
              },
            },
          });
        }}
      />
      <SliderRow
        title="cy"
        min={0}
        max={1}
        step={0.01}
        value={[attrs.cy]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_RADIAL_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                cy: newValues[0],
              },
            },
          });
        }}
      />
      <SliderRow
        title="r"
        min={0}
        max={10}
        step={0.01}
        value={[attrs.r]}
        onValueChange={(newValues) => {
          dispatch({
            type: "SET_RADIAL_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                r: newValues[0],
              },
            },
          });
        }}
      />
      <CheckboxRow
        label="Focal points"
        checked={attrs.withFocalPoints === true}
        onChange={(withFocalPoints) => {
          dispatch({
            type: "SET_RADIAL_GRADIENT_ATTRS",
            payload: {
              id: gradientId,
              attrs: {
                ...attrs,
                withFocalPoints,
              },
            },
          });
        }}
        id={`${gradientId}-focal-points`}
      />
      {attrs.withFocalPoints && (
        <>
          <SliderRow
            title="fx"
            min={-1}
            max={1}
            step={0.01}
            value={[attrs.fx ?? 0.5]}
            onValueChange={(newValues) => {
              dispatch({
                type: "SET_RADIAL_GRADIENT_ATTRS",
                payload: {
                  id: gradientId,
                  attrs: {
                    ...attrs,
                    fx: newValues[0],
                  },
                },
              });
            }}
          />
          <SliderRow
            title="fy"
            min={-1}
            max={1}
            step={0.01}
            value={[attrs.fy ?? 0.5]}
            onValueChange={(newValues) => {
              dispatch({
                type: "SET_RADIAL_GRADIENT_ATTRS",
                payload: {
                  id: gradientId,
                  attrs: {
                    ...attrs,
                    fy: newValues[0],
                  },
                },
              });
            }}
          />
        </>
      )}
    </>
  );
};
