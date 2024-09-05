import { FC } from "react";
import { selectedGradientIdAtom } from "@/state/gradients.state";

import { useAtom } from "jotai";
import GradientItem from "./gradient-item";
import { useGradientList } from "@/state/useGradientList";

const GradientList: FC = () => {
  const { gradientIds, deleteGradient } = useGradientList();
  const [selectedGradientId, setSelectedGradientId] = useAtom(
    selectedGradientIdAtom
  );

  return (
    <ul className="w-full flex flex-col overflow-y-auto max-h-[300px] pt-1">
      {gradientIds.map((gradientId, index) => (
        <GradientItem
          key={gradientId}
          id={gradientId}
          selected={gradientId === selectedGradientId}
          index={index}
          onDelete={() => {
            deleteGradient(gradientId);
          }}
          onSelect={setSelectedGradientId}
        />
      ))}
    </ul>
  );
};

export default GradientList;
