import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/authContext";
import { router } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { globalTheme } from "./styles/globalTheme";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <RouterProvider router={router} />
      <Toaster />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
