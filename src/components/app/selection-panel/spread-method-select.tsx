import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import {
  Gradient,
  RadialGradientAttributes,
  SpreadMethod,
} from "@/state/types";
import { useAtomValue, useSetAtom } from "jotai";
import { FC, useMemo } from "react";
import SelectRow from "../select-row";

const SPREAD_METHODS: RadialGradientAttributes["spreadMethod"][] = [
  "pad",
  "repeat",
  "reflect",
];

const SpreadMethodSelect: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const selectedGradient = useAtomValue(selectedGradientAtom) as Gradient;

  const isRadial = selectedGradient.type === "radial";

  const currentValue = useMemo(
    () =>
      isRadial
        ? selectedGradient.radialAttributes.spreadMethod
        : selectedGradient.linearAttributes.spreadMethod,
    [selectedGradient]
  );

  return (
    <SelectRow<SpreadMethod>
      label="Spread method"
      value={currentValue}
      options={SPREAD_METHODS.map((m) => ({ id: m, value: m }))}
      onValueChange={(value: string) => {
        if (isRadial) {
          dispatch({
            type: "SET_RADIAL_GRADIENT_ATTRS",
            payload: {
              id: selectedGradient.id,
              attrs: {
                ...selectedGradient.radialAttributes,
                spreadMethod: value as SpreadMethod,
              },
            },
          });
        } else {
          dispatch({
            type: "SET_LINEAR_GRADIENT_ATTRS",
            payload: {
              id: selectedGradient.id,
              attrs: {
                ...selectedGradient.linearAttributes,
                spreadMethod: value as SpreadMethod,
              },
            },
          });
        }
      }}
    />
  );
};

export default SpreadMethodSelect;
