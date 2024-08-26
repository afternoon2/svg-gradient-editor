import { useListContext } from "@/state/list";
import { FC } from "react";
import GradientItem from "./gradient-item";
import ColorList from "../color-list";
import GradientTypeSection from "./gradient-type-section";

const GradientList: FC = () => {
  const { state } = useListContext();

  const { gradients } = state;

  return (
    <div className="w-full flex flex-col h-full overflow-y-auto">
      {gradients.map((gradient, index) => (
        <GradientItem key={gradient.id} gradient={gradient} index={index}>
          <GradientTypeSection gradient={gradient} />
          <ColorList gradient={gradient} />
        </GradientItem>
      ))}
    </div>
  );
};

export default GradientList;
