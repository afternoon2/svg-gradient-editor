import { ThemeProvider } from "@/components/theme-provider";
import ListContextProvider from "./state/list";
import Container from "@/components/container";
import Aside from "@/components/aside";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ListContextProvider>
        <Container>
          <main className="flex flex-col"></main>
          <Aside>
            <Aside.Header />
            <Separator />
          </Aside>
        </Container>
      </ListContextProvider>
    </ThemeProvider>
  );
}

export default App;
