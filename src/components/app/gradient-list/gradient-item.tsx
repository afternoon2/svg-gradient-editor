import { Gradient } from "@/state/types";
import { FC, PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useListContext } from "@/state/list";
import DeleteButton from "@/components/ui/delete-button";

const GradientItem: FC<
  PropsWithChildren<{
    gradient: Gradient;
    index: number;
  }>
> = ({ gradient, index, children }) => {
  const { dispatch } = useListContext();
  return (
    <Card className="mb-4">
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
      <CardContent>{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GradientItem;
