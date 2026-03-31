import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DownloadSection from "@/components/app/layers-panel/download-section";
import CommandButtons from "@/components/app/layers-panel/command-buttons";
import PresetSection from "@/components/app/layers-panel/preset-section";
import GradientList from "@/components/app/layers-panel/gradient-list";
import { GlobalBlendModeSelect } from "@/components/app/layers-panel/blend-mode-select";
import RepoLink from "@/components/app/layers-panel/repo-link";
import { ModeToggle } from "@/components/app/mode-toggle";
import SidebarProperties from "@/components/app/sidebar/properties";
import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <aside className="w-[350px] shrink-0 h-screen bg-card border-r-2 border-border flex flex-col overflow-hidden">
      <header className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h1 className="text-base font-semibold">SVG Gradient Editor</h1>
        <div className="flex items-center gap-1">
          <RepoLink />
          <DownloadSection />
          <ModeToggle />
        </div>
      </header>
      <Tabs
        defaultValue="layers"
        className="flex-1 flex flex-col overflow-hidden"
      >
        <TabsList>
          <TabsTrigger value="layers">Layers</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
        </TabsList>
        <TabsContent value="layers" className="px-4 py-3">
          <PresetSection />
          <GlobalBlendModeSelect />
          <CommandButtons />
          <GradientList />
        </TabsContent>
        <TabsContent value="properties" className="px-4 py-3">
          <SidebarProperties />
        </TabsContent>
      </Tabs>
    </aside>
  );
};

export default Sidebar;
