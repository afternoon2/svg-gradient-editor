import { FC } from "react";
import { useGradientList } from "@/state/gradients.state";
import { PlusIcon, Save, Trash } from "lucide-react";
import GenericButton from "@/components/ui/generic-button";

const CommandButtons: FC = () => {
  const { addGradient, deleteAllGradients, gradientIds } = useGradientList();

  const noGradients = gradientIds.length <= 0;

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        <GenericButton onClick={addGradient} title="Add gradient">
          <PlusIcon className="w-3 h-3" />
        </GenericButton>
        <GenericButton
          disabled={noGradients}
          onClick={addGradient}
          title={noGradients ? "Nothing to save" : "Save gradients"}
        >
          <Save className="w-3 h-3" />
        </GenericButton>
      </div>
      <GenericButton
        onClick={deleteAllGradients}
        disabled={noGradients}
        title={noGradients ? "No gradients to delete" : "Delete all gradients"}
      >
        <Trash className="w-3 h-3 stroke-red-500" />
      </GenericButton>
    </div>
  );
};

export default CommandButtons;
