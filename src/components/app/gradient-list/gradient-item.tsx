import { FC, PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenericButton from "@/components/ui/generic-button";
import { Trash } from "lucide-react";

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
          <GenericButton onClick={onDelete} title="Delete gradient">
            <Trash className="w-3 h-3" />
          </GenericButton>
        </CardTitle>
      </CardHeader>
      <CardDescription></CardDescription>
      <CardContent>{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GradientItem;
