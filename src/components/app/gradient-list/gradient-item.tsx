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
import { useListContext } from "@/state/list";
import DeleteButton from "@/components/ui/delete-button";

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
          <DeleteButton
            onClick={() => {
              dispatch({
                type: "DELETE_GRADIENT",
                payload: { id: gradient.id },
              });
            }}
            tooltipText="Delete gradient"
          />
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
