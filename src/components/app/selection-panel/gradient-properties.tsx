import { FC, useContext } from "react";
import SliderRow from "@/components/app/slider-row";
import { SelectionPanelContext } from "./context";
import { useAtom, useAtomValue } from "jotai";
import {
  gradientTypeAtomFamily,
  linearGradientAttributesFamily,
  radialGradientAttributesFamily,
} from "@/state/gradients.store";
import SwitchRow from "../switch-row";

const LinearGradientProperties: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const [properties, setProperties] = useAtom(
    linearGradientAttributesFamily(gradientId)
  );

  return (
    <>
      <SliderRow
        title="x1"
        min={-1}
        max={1}
        step={0.01}
        value={[properties.attrs.x1]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              x1: newValues[0],
            },
          }));
        }}
      />
      <SliderRow
        title="y1"
        min={-1}
        max={1}
        step={0.01}
        value={[properties.attrs.y1]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              y1: newValues[0],
            },
          }));
        }}
      />
      <SliderRow
        title="x2"
        min={-1}
        max={1}
        step={0.01}
        value={[properties.attrs.x2]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              x2: newValues[0],
            },
          }));
        }}
      />
      <SliderRow
        title="y2"
        min={-1}
        max={1}
        step={0.01}
        value={[properties.attrs.y2]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              y2: newValues[0],
            },
          }));
        }}
      />
    </>
  );
};

const RadialGradientProperties: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const [properties, setProperties] = useAtom(
    radialGradientAttributesFamily(gradientId)
  );
  return (
    <>
      <SliderRow
        title="cx"
        min={0}
        max={1}
        step={0.01}
        value={[properties.attrs.cx]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              cx: newValues[0],
            },
          }));
        }}
      />
      <SliderRow
        title="cy"
        min={0}
        max={1}
        step={0.01}
        value={[properties.attrs.cy]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              cy: newValues[0],
            },
          }));
        }}
      />
      <SliderRow
        title="r"
        min={0}
        max={10}
        step={0.01}
        value={[properties.attrs.r]}
        onValueChange={(newValues) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              r: newValues[0],
            },
          }));
        }}
      />
      <SwitchRow
        label="Focal points"
        checked={properties.attrs.withFocalPoints === true}
        onChange={(withFocalPoints) => {
          setProperties((prev) => ({
            ...prev,
            attrs: {
              ...prev.attrs,
              withFocalPoints,
            },
          }));
        }}
      />
      {properties.attrs.withFocalPoints && (
        <>
          <SliderRow
            title="fx"
            min={-1}
            max={1}
            step={0.01}
            value={[properties.attrs.fx ?? 0.5]}
            onValueChange={(newValue) => {
              setProperties((prev) => ({
                ...prev,
                attrs: {
                  ...prev.attrs,
                  fx: newValue[0],
                },
              }));
            }}
          />
          <SliderRow
            title="fy"
            min={-1}
            max={1}
            step={0.01}
            value={[properties.attrs.fy ?? 0.5]}
            onValueChange={(newValue) => {
              setProperties((prev) => ({
                ...prev,
                attrs: {
                  ...prev.attrs,
                  fy: newValue[0],
                },
              }));
            }}
          />
        </>
      )}
    </>
  );
};

const GradientProperties: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const gradientTypeAtomValue = useAtomValue(
    gradientTypeAtomFamily(gradientId)
  );

  return (
    <div className="w-full flex flex-col py-2">
      {gradientTypeAtomValue.type === "linear" && <LinearGradientProperties />}
      {gradientTypeAtomValue.type === "radial" && <RadialGradientProperties />}
    </div>
  );
};

export default GradientProperties;
