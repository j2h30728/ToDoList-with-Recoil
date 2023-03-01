import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { light } from "./styles/theme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
