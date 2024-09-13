import SizeControls from "@/components/app/view/size-controls";
import SelectionPanel from "@/components/app/selection-panel";
import ThemeListener from "@/components/app/theme-listener";
import LayersPanel from "@/components/app/layers-panel";
import Artboard from "@/components/app/view/artboard";
import Figures from "@/components/app/view/figures";
import Defs from "@/components/app/view/defs";
import { DevTools } from "jotai-devtools";
import View from "@/components/app/view";
import { Provider } from "jotai";

import "jotai-devtools/styles.css";

function App() {
  return (
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
      <ThemeListener />
    </Provider>
  );
}

export default App;
