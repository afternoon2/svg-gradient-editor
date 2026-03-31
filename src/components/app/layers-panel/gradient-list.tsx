import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";

import GradientItem from "@/components/app/layers-panel/gradient-item";
import { gradientStateReducerAtom } from "@/state/gradient.store";
import { useAtom } from "jotai";

const GradientList: FC = () => {
  const [state, dispatch] = useAtom(gradientStateReducerAtom);

  return (
    <ScrollArea className="max-h-[300px]">
      <ul className="w-full flex flex-col pt-1">
        {state.gradients.map((gradient, index) => (
          <GradientItem
            key={gradient.id}
            gradient={gradient}
            onDelete={() => {
              dispatch({
                type: "REMOVE_GRADIENT",
                payload: { id: gradient.id },
              });
            }}
            onSelect={(id: string) => {
              dispatch({
                type: "SELECT_GRADIENT",
                payload: { id },
              });
            }}
            selected={gradient.id === state.selectedGradientId}
            index={index}
          />
        ))}
      </ul>
    </ScrollArea>
  );
};

export default GradientList;
