import { FC, useContext } from "react";
import SwitchRow from "../switch-row";
import { useAtom } from "jotai";
import { chromaUsageFamily } from "@/state/gradients.store";
import { SelectionPanelContext } from "./context";

const ChromaSwitch: FC = () => {
  const { gradientId } = useContext(SelectionPanelContext);
  const [chromaUsage, setChromaUsage] = useAtom(chromaUsageFamily(gradientId));

  return (
    <SwitchRow
      label="Use chroma"
      checked={chromaUsage.value}
      onChange={(checked) => {
        setChromaUsage((prev) => ({
          ...prev,
          value: checked,
        }));
      }}
    />
  );
};

export default ChromaSwitch;
