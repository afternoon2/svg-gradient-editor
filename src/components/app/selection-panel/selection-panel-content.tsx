import { useSingleGradient } from "@/state/gradients.state";
import { FC, useCallback } from "react";
import Panel from "../panel";
import GradientTypeSelect from "./gradient-type-select";
import {
  getDefaultLinearGradientAttributes,
  getDefaultRadialGradientAttributes,
} from "@/lib/gradient";
import { Gradient } from "@/state/types";
import ColorsList from "./colors-list";
import ColorItem from "./color-item";
import CommandButtons from "./command-buttons";
import BlendModeSelect from "./blend-mode-select";
import ColorSpaceSelect from "./color-space-switch";
import ChromaSwitch from "./chroma-switch";

const SelectionPanelContent: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  const setGradientType = useCallback(
    (newValue: Gradient["type"]) => {
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
    },
    [gradient, setGradient]
  );

  return (
    <Panel
      title={gradient.name ?? "Selected gradient"}
      className="right-3 top-3 z-10"
    >
      <ColorSpaceSelect />
      <GradientTypeSelect
        gradientType={gradient.type}
        setGradientType={setGradientType}
      />
      <BlendModeSelect gradientId={gradientId} />
      <CommandButtons gradientId={gradient.id} />
      <ColorsList>
        {gradient.colors.map((color) => (
          <ColorItem key={color.id} gradientId={gradient.id} color={color} />
        ))}
      </ColorsList>
      <ChromaSwitch />
    </Panel>
  );
};

export default SelectionPanelContent;
