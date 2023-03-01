import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { light } from "./styles/theme";
import TodoLsit from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <TodoLsit />
    </ThemeProvider>
  );
}

export default App;
