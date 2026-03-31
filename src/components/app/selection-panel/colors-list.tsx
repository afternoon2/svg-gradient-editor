import { ScrollArea } from "@/components/ui/scroll-area";
import { FC, PropsWithChildren } from "react";

const ColorsList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollArea className="max-h-[200px]">
      <ul className="w-full flex flex-col pt-2">
        {children}
      </ul>
    </ScrollArea>
  );
};

export default ColorsList;
