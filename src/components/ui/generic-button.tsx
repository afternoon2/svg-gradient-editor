import { FC, PropsWithChildren } from "react";
import { Button } from "./button";

const GenericButton: FC<
  PropsWithChildren<{
    onClick: VoidFunction;
    title?: string;
    disabled?: boolean;
    className?: string;
  }>
> = ({ onClick, title, disabled, children, className }) => {
  return (
    <Button
      onClick={onClick}
      variant="link"
      size="icon"
      title={title}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
};

export default GenericButton;
