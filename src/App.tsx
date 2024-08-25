import { ThemeProvider } from "@/components/theme-provider";
import ListContextProvider from "./state/list";
import Container from "@/components/container";
import SettingsPanel from "./components/settings-panel";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <Container>
          <SettingsPanel />
          <main className="flex flex-col h-full"></main>
        </Container>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
