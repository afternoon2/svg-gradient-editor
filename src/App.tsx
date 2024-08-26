import { ThemeProvider } from "@/components/theme-provider";
import ListContextProvider from "./state/list";
import Container from "@/components/app/container";
import SettingsPanel from "@/components/app/settings-panel";
import View from "./components/app/view";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <Container>
          <SettingsPanel />
          <View />
        </Container>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
