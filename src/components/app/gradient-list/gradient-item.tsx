import { FC, PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteButton from "@/components/ui/delete-button";

const GradientItem: FC<
  PropsWithChildren<{
    onDelete: VoidFunction;
    index: number;
  }>
> = ({ onDelete, index, children }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-base flex items-center justify-between w-100">
          Gradient {index + 1}
          <DeleteButton onClick={onDelete} tooltipText="Delete gradient" />
        </CardTitle>
      </CardHeader>
      <CardDescription></CardDescription>
      <CardContent>{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GradientItem;
