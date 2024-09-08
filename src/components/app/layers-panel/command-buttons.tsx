import { FC, useCallback } from "react";
import { PlusIcon, Trash } from "lucide-react";
import GenericButton from "@/components/ui/generic-button";
import {
  gradientStateReducerAtom,
  randomGradient,
} from "@/state/gradient.store";
import { useAtom, useSetAtom } from "jotai";
import { selectedPresetIdAtom } from "@/state/presets.state";

const CommandButtons: FC = () => {
  const [state, dispatch] = useAtom(gradientStateReducerAtom);
  const setSelectedPresetId = useSetAtom(selectedPresetIdAtom);

  const noGradients = state.gradients.length <= 0;

  const addGradient = useCallback(() => {
    if (state.gradients.length === 0) {
      setSelectedPresetId(undefined);
    }
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
