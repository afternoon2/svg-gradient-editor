import {
  gradientStateReducerAtom,
  randomGradient,
} from "@/state/gradient.store";
import { selectedPresetIdAtom } from "@/state/presets.state";
import GenericButton from "@/components/ui/generic-button";
import { artboardSizeAtom } from "@/state/artboard.state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { PlusIcon, Trash } from "lucide-react";
import { FC, useCallback } from "react";

const CommandButtons: FC = () => {
  const [state, dispatch] = useAtom(gradientStateReducerAtom);
  const setSelectedPresetId = useSetAtom(selectedPresetIdAtom);
  const artboardSize = useAtomValue(artboardSizeAtom);

  const noGradients = state.gradients.length <= 0;

  const addGradient = useCallback(() => {
    if (state.gradients.length === 0) {
      setSelectedPresetId(undefined);
    }
    dispatch({
      type: "ADD_GRADIENT",
      payload: { gradient: randomGradient(artboardSize) },
    });
  }, [dispatch, artboardSize]);

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
