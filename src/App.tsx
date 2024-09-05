import { ThemeProvider } from "@/components/theme-provider";
import View from "./components/app/view";
import Artboard from "./components/app/view/artboard";
import Defs from "./components/app/view/defs";
import Figures from "./components/app/view/figures";
import SizeControls from "./components/app/view/size-controls";
import { Provider } from "jotai";
import LayersPanel from "./components/app/layers-panel";
import SelectionPanel from "./components/app/selection-panel";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider>
        <DevTools />
        <View>
          <LayersPanel />
          <SelectionPanel />
          <SizeControls />
          <Artboard>
            <Defs />
            <Figures />
          </Artboard>
        </View>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
