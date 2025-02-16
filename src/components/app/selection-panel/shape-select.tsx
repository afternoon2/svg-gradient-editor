import {
  gradientStateReducerAtom,
  selectedGradientAtom,
} from "@/state/gradient.store";
import { Gradient, SHAPES, ShapeType } from "@/state/types";
import SelectRow from "@/components/app/select-row";
import { useAtomValue, useSetAtom } from "jotai";
import { FC } from "react";

const ShapeSelect: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const selectedGradient = useAtomValue(selectedGradientAtom) as Gradient;

  return (
    <SelectRow<ShapeType>
      label="Figure shape"
      value={selectedGradient.shape}
      options={SHAPES.map((m) => ({ id: m, value: m, label: m }))}
      onValueChange={(value: ShapeType) => {
        dispatch({
          type: "SET_SHAPE",
          payload: {
            gradientId: selectedGradient.id,
            shape: value,
          },
        });
      }}
    />
  );
};

export default ShapeSelect;
