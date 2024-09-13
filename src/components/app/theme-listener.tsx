import { themeAtom } from "@/state/theme.state";
import { FC, useEffect } from "react";
import { useAtomValue } from "jotai";

const ThemeListener: FC = () => {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return null;
};

export default ThemeListener;
