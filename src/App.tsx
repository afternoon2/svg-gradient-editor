import { ThemeProvider } from "@/components/theme-provider";
import ListContextProvider from "./state/list";
import Container from "@/components/container";
import Aside from "@/components/aside";
import { Separator } from "@/components/ui/separator";
import PresetSelect from "./components/preset-select";
import { GlobalBlendModeSelect } from "./components/blend-mode-select";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <Container>
          <main className="flex flex-col"></main>
          <Aside>
            <Aside.Header />
            <Separator />
            <Aside.Row>
              <PresetSelect />
            </Aside.Row>
            <Aside.Row>
              <GlobalBlendModeSelect />
            </Aside.Row>
          </Aside>
        </Container>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
