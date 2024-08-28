import { useSingleGradient } from "@/state/gradients.state";
import { FC } from "react";
import Panel from "../panel";
import GradientTypeSelect from "./gradient-type-select";
import {
  getDefaultLinearGradientAttributes,
  getDefaultRadialGradientAttributes,
} from "@/lib/gradient";
import { Gradient } from "@/state/types";

const SelectionPanelContent: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  return (
    <Panel
      title={gradient.name ?? "Selected gradient"}
      className="left-3 bottom-14 z-10"
    >
      <GradientTypeSelect
        gradientType={gradient.type}
        setGradientType={(newValue) => {
          if (newValue === gradient.type) {
            return;
          } else {
            setGradient(
              (prev) =>
                ({
                  ...prev,
                  type: newValue as Gradient["type"],
                  attributes:
                    newValue === "linear"
                      ? getDefaultLinearGradientAttributes()
                      : getDefaultRadialGradientAttributes(),
                } as Gradient)
            );
          }
        }}
      />
    </Panel>
  );
};

export default SelectionPanelContent;
