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
        <div className="flex-1 h-screen relative flex items-center justify-center">
          <SizeControls />
          <Artboard>
            <Defs />
            <Figures />
          </Artboard>
        </div>
      </View>
      <ThemeListener />
    </Provider>
  );
}

export default App;
