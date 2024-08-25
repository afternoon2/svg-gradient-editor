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

const GradientItem: FC<{
  gradient: Gradient;
  index: number;
}> = ({ gradient, index }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Gradient {index + 1}</CardTitle>
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
