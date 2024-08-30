import { useSingleGradient } from "@/state/gradients.state";
import { FC } from "react";
import SwitchRow from "../switch-row";

const ChromaSwitch: FC<{ gradientId: string }> = ({ gradientId }) => {
  const [gradient, setGradient] = useSingleGradient(gradientId);

  return (
    <SwitchRow
      label="Use chroma"
      checked={gradient.useChroma ?? false}
      onChange={(checked) => {
        setGradient((prev) => ({
          ...prev,
          useChroma: checked,
        }));
      }}
    />
  );
};

export default ChromaSwitch;
