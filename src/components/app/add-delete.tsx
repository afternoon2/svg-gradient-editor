import { FC } from "react";
import { Button } from "@/components/ui/button";
import { CircleAlert, Plus, Save } from "lucide-react";
import { useGradientList } from "@/state/useGradientList";

const AddDelete: FC = () => {
  const { gradientIds, addGradient, deleteAllGradients } = useGradientList();

  return (
    <div className="w-full flex items-center">
      <Button variant="outline" size="sm" onClick={addGradient}>
        Add gradient <Plus className="w-4 h-4 ml-2" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        disabled={gradientIds.length === 0}
        className="ml-2"
      >
        Save <Save className="w-4 h-4 ml-2" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={deleteAllGradients}
        className="ml-2"
        disabled={gradientIds.length === 0}
      >
        Delete all gradients
        <CircleAlert className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default AddDelete;
