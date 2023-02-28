import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { light } from "./styles/theme";
import TodoLsit from "./components/ToDoList";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <TodoLsit />
    </ThemeProvider>
  );
}

export default App;
