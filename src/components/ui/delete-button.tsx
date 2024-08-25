import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";
import { Trash } from "lucide-react";

const DeleteButton: FC<{
  onClick: VoidFunction;
  tooltipText: string;
  disabled?: boolean;
}> = ({ onClick, tooltipText, disabled }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="link" onClick={onClick} disabled={disabled}>
            <Trash className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DeleteButton;
