import { ThemeProvider } from "@/components/theme-provider";
import ListContextProvider from "./state/list";
import Container from "@/components/container";
import Aside from "@/components/aside";
import { Separator } from "@/components/ui/separator";
import PresetSelect from "./components/preset-select";
import { GlobalBlendModeSelect } from "./components/blend-mode-select";
import AddDelete from "./components/add-delete";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <Container>
          <main className="flex flex-col"></main>
          <Aside>
            <Aside.Header />
            <Aside.Row>
              <Separator />
            </Aside.Row>
            <Aside.Row>
              <PresetSelect />
            </Aside.Row>
            <Aside.Row>
              <GlobalBlendModeSelect />
            </Aside.Row>
            <Aside.Row>
              <Separator />
            </Aside.Row>
            <Aside.Row>
              <AddDelete />
            </Aside.Row>
          </Aside>
        </Container>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
