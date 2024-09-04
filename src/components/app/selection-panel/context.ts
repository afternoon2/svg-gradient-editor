import { createContext } from "react";

export const SelectionPanelContext = createContext<{ gradientId: string }>({
  gradientId: "",
});
