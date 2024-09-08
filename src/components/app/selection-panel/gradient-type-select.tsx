import { GradientType } from "@/state/types";
import { useSetAtom } from "jotai";
import { FC } from "react";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import SelectRow from "../select-row";

const OPTIONS: GradientType[] = ["linear", "radial"];

const GradientTypeSelect: FC<{ type: GradientType; gradientId: string }> = ({
  type,
  gradientId,
}) => {
  const dispatch = useSetAtom(gradientStateReducerAtom);

  return (
    <div className="w-full flex items-center py-2">
      <SelectRow<GradientType>
        label="Gradient type"
        value={type}
        placeholder="Select gradient type"
        onValueChange={(value) => {
          dispatch({
            type: "SET_GRADIENT_TYPE",
            payload: {
              id: gradientId,
              type: value as GradientType,
            },
          });
        }}
        options={OPTIONS.map((opt) => ({
          id: opt,
          value: opt,
        }))}
      />
    </div>
  );
};

export default GradientTypeSelect;
