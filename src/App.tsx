import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";
import { globalTheme } from "./styles/globalTheme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      {/* <Home /> */}
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
