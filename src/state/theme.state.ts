import { atomWithStorage } from "jotai/utils";

type Theme = "dark" | "light";

export const themeAtom = atomWithStorage<Theme>("vite-ui-theme", "dark");
