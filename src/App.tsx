import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { globalTheme } from "./styles/globalTheme";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
