import { FC } from "react";
import GradientItem from "./gradient-item";
import ColorList from "../color-list";
import GradientTypeSection from "./gradient-type-section";
import { useGradientList } from "@/state/gradients.state";

const GradientList: FC = () => {
  const { gradientIds, deleteGradient } = useGradientList();

  return (
    <div className="w-full flex flex-col h-full overflow-y-auto">
      {gradientIds.map((gradientId, index) => (
        <GradientItem
          key={gradientId}
          onDelete={() => {
            deleteGradient(gradientId);
          }}
          index={index}
        >
          <GradientTypeSection gradientId={gradientId} />
          <ColorList gradientId={gradientId} />
        </GradientItem>
      ))}
    </div>
  );
};

export default GradientList;
