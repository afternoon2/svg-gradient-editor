import { Input } from "@/components/ui/input";
import { useListContext } from "@/state/list";
import { FC } from "react";
import Artboard from "./artboard";
import Defs from "./defs";
import Figures from "./figures";

const View: FC = () => {
  const {
    state: { artboardSize, gradients, globalBlendMode },
    dispatch,
  } = useListContext();
  return (
    <main className="flex flex-col h-full items-center justify-center relative">
      <div className="flex items-center absolute z-10 top-2 p-4 bg-background rounded shadow-lg ">
        <Input
          type="number"
          min={10}
          step={1}
          value={artboardSize[0]}
          className="w-[100px]"
          onChange={(event) => {
            dispatch({
              type: "SET_ARTBOARD_SIZE",
              payload: {
                size: [parseInt(event.target.value), artboardSize[1]],
              },
            });
          }}
        />
        <span className="px-2">x</span>
        <Input
          type="number"
          min={10}
          step={1}
          value={artboardSize[1]}
          className="w-[100px]"
          onChange={(event) => {
            dispatch({
              type: "SET_ARTBOARD_SIZE",
              payload: {
                size: [artboardSize[0], parseInt(event.target.value)],
              },
            });
          }}
        />
      </div>
      <Artboard>
        <Defs gradients={gradients} globalBlendMode={globalBlendMode} />
        <Figures />
      </Artboard>
    </main>
  );
};

export default View;
