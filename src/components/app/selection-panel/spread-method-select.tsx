import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <div className="w-full flex items-center pb-1">
      <Label className="text-xs mr-3 w-1/3">Spread method:</Label>
      <Select
        value={currentValue}
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
      >
        <SelectTrigger className="w-[110px] p-1 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SPREAD_METHODS.map((method) => (
            <SelectItem key={method} value={method as string}>
              {method}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SpreadMethodSelect;
