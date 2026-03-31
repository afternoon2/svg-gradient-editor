import SizeControls from "@/components/app/view/size-controls";
import ThemeListener from "@/components/app/theme-listener";
import Artboard from "@/components/app/view/artboard";
import Sidebar from "@/components/app/sidebar";
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
        <Sidebar />
        <div className="relative bg-muted p-4">
          <div className="relative h-full flex items-center justify-center bg-background rounded-xl p-4">
            <SizeControls />
            <Artboard>
              <Defs />
              <Figures />
            </Artboard>
          </div>
        </div>
      </View>
      <ThemeListener />
    </Provider>
  );
}

export default App;
