import { ThemeProvider } from "@/components/theme-provider";
import ListContextProvider from "./state/list";
import Container from "@/components/app/container";
import SettingsPanel from "@/components/app/settings-panel";
import View from "./components/app/view";
import Artboard from "./components/app/view/artboard";
import Defs from "./components/app/view/defs";
import Figures from "./components/app/view/figures";
import SizeControls from "./components/app/view/size-controls";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <Container>
          <SettingsPanel />
          <View>
            <SizeControls />
            <Artboard>
              <Defs />
              <Figures />
            </Artboard>
          </View>
        </Container>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
