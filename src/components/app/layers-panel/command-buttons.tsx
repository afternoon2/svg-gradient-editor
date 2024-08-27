import { FC } from "react";
import { useGradientList } from "@/state/gradients.state";
import { Button } from "../../ui/button";
import { PlusIcon, Save, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CommandButtons: FC = () => {
  const { addGradient, deleteAllGradients, gradientIds } = useGradientList();

  const noGradients = gradientIds.length <= 0;

  return (
    <div className="w-full flex items-center justify-between">
      <TooltipProvider>
        <div className="flex items-center">
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="secondary" onClick={addGradient}>
                <PlusIcon className="w-3 h-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add gradient</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button
                size="icon"
                variant="secondary"
                disabled={noGradients}
                onClick={addGradient}
              >
                <Save className="w-3 h-3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {noGradients ? "Nothing to save" : "Save gradients"}
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger>
            <Button
              size="icon"
              variant="secondary"
              onClick={deleteAllGradients}
              disabled={noGradients}
            >
              <Trash className="w-3 h-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {noGradients ? "No gradients to delete" : "Delete all gradients"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CommandButtons;
