import DownloadSection from "@/components/app/layers-panel/download-section";
import CommandButtons from "@/components/app/layers-panel/command-buttons";
import PresetSection from "@/components/app/layers-panel/preset-section";
import GradientList from "@/components/app/layers-panel/gradient-list";
import { GlobalBlendModeSelect } from "@/components/app/layers-panel/blend-mode-select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import FieldsetLegend from "@/components/app/fieldset-legend";
import RepoLink from "@/components/app/layers-panel/repo-link";
import { ModeToggle } from "@/components/app/mode-toggle";
import { gradientStateReducerAtom, randomGradient } from "@/state/gradient.store";
import { artboardSizeAtom } from "@/state/artboard.state";
import SidebarProperties from "@/components/app/sidebar/properties";
import { useAtomValue, useSetAtom } from "jotai";
import { FC, useEffect, useRef } from "react";

const Sidebar: FC = () => {
  const dispatch = useSetAtom(gradientStateReducerAtom);
  const artboardSize = useAtomValue(artboardSizeAtom);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch({
        type: "ADD_GRADIENT",
        payload: { gradient: randomGradient(artboardSize) },
      });
    }
  }, []);

  return (
    <aside className="bg-card border-r-2 border-border flex flex-col overflow-hidden">
      <header className="px-4 pt-4 pb-3 flex items-center justify-between">
        <h1 className="text-lg font-bold">SVG Gradient Editor</h1>
        <div className="flex items-center gap-1">
          <RepoLink />
          <ModeToggle />
        </div>
      </header>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="px-4 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <FieldsetLegend title="Presets">
              <PresetSection />
            </FieldsetLegend>
            <FieldsetLegend title="Gradients">
              <GlobalBlendModeSelect />
              <CommandButtons />
              <GradientList />
            </FieldsetLegend>
          </div>

          <SidebarProperties />
        </div>
      </ScrollArea>
      <Separator />
      <div className="px-4 py-3">
        <DownloadSection />
      </div>
    </aside>
  );
};

export default Sidebar;
