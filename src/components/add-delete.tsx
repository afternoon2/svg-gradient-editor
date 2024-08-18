import { FC } from "react";
import { Button } from "./ui/button";
import { CircleAlert, Plus, Save } from "lucide-react";
import { useListContext } from "@/state/list";
import { createEmptyGradientObject } from "@/lib/gradient";

const AddDelete: FC = () => {
  const { state, dispatch } = useListContext();

  return (
    <div className="w-full flex items-center">
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          dispatch({
            type: "ADD_GRADIENT",
            payload: createEmptyGradientObject(),
          });
        }}
      >
        Add gradient <Plus className="w-4 h-4 ml-2" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        disabled={state.gradients.length === 0}
        className="ml-2"
      >
        Save <Save className="w-4 h-4 ml-2" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          dispatch({ type: "DELETE_ALL_GRADIENTS" });
        }}
        className="ml-2"
        disabled={state.gradients.length === 0}
      >
        Delete all gradients
        <CircleAlert className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default AddDelete;
