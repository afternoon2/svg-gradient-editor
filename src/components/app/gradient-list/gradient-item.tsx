import { Gradient } from "@/state/types";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ColorList from "../color-list";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useListContext } from "@/state/list";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const GradientItem: FC<{
  gradient: Gradient;
  index: number;
}> = ({ gradient, index }) => {
  const { dispatch } = useListContext();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center justify-between w-100">
          Gradient {index + 1}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="link"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_GRADIENT",
                      payload: { id: gradient.id },
                    });
                  }}
                >
                  <Trash className="stroke-red-600 w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete gradient</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardDescription></CardDescription>
      <CardContent>
        <ColorList gradient={gradient} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GradientItem;
