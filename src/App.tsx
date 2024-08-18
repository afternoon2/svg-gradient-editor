import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import ListContextProvider from "./state/list";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <div className="grid min-h-screen w-full grid-cols-[1fr_220px] md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_450px]">
          <main className="flex flex-col"></main>
          <aside className="hidden border-r bg-muted/40 md:block">
            <ModeToggle />
          </aside>
        </div>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
