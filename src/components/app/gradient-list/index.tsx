import { useListContext } from "@/state/list";
import { FC } from "react";
import GradientItem from "./gradient-item";

const GradientList: FC = () => {
  const { state } = useListContext();

  const { gradients } = state;

  return (
    <div className="w-full flex flex-col h-full overflow-y-auto">
      {gradients.map((gradient, index) => (
        <GradientItem key={gradient.id} gradient={gradient} index={index} />
      ))}
    </div>
  );
};

export default GradientList;
