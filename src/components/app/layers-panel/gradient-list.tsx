import { FC, PropsWithChildren } from "react";
import { useGradientList } from "@/state/gradients.state";
import DeleteButton from "@/components/ui/delete-button";
import { Separator } from "@/components/ui/separator";

const GradientItem: FC<
  PropsWithChildren<{
    onDelete: VoidFunction;
    index: number;
  }>
> = ({ onDelete, index }) => {
  return (
    <li className="w-full flex flex-col m-0">
      <div className="w-full flex items-center justify-between">
        <p className="text-xs">Gradient {index + 1}</p>
        <DeleteButton onClick={onDelete} tooltipText="Delete gradient" />
      </div>
      <Separator />
    </li>
  );
};

const GradientList: FC = () => {
  const { gradientIds, deleteGradient } = useGradientList();

  return (
    <ul className="w-full flex flex-col overflow-y-auto max-h-[500px]">
      {gradientIds.map((gradientId, index) => (
        <GradientItem
          key={gradientId}
          index={index}
          onDelete={() => {
            deleteGradient(gradientId);
          }}
        />
      ))}
    </ul>
  );
};

export default GradientList;
