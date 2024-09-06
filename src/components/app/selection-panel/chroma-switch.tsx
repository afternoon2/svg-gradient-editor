import { FC } from "react";
import SwitchRow from "../switch-row";

const ChromaSwitch: FC<{
  value: boolean;
  onChange: (value: boolean) => void;
}> = ({ value, onChange }) => {
  return <SwitchRow label="Use chroma" checked={value} onChange={onChange} />;
};

export default ChromaSwitch;
