import { FC, useCallback } from "react";
import { PlusIcon, Save, Trash } from "lucide-react";
import GenericButton from "@/components/ui/generic-button";
import {
  gradientStateReducerAtom,
  randomGradient,
} from "@/state/gradient.store";
import { useAtom } from "jotai";

const CommandButtons: FC = () => {
  const [state, dispatch] = useAtom(gradientStateReducerAtom);

  const noGradients = state.gradients.length <= 0;

  const addGradient = useCallback(() => {
    dispatch({
      type: "ADD_GRADIENT",
      payload: { gradient: randomGradient() },
    });
  }, [dispatch]);

  return (
    <div className="w-full flex items-center justify-between">
      <GenericButton onClick={addGradient} title="Add gradient">
        <PlusIcon className="w-3 h-3" />
      </GenericButton>
      <GenericButton
        onClick={() => {
          dispatch({ type: "REMOVE_ALL_GRADIENTS" });
        }}
        disabled={noGradients}
        title={noGradients ? "No gradients to delete" : "Delete all gradients"}
      >
        <Trash className="w-3 h-3 stroke-red-500" />
      </GenericButton>
    </div>
  );
};

export default CommandButtons;
