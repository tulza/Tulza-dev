import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
//styles
import "@styles/styles.css";
import "@styles/fonts.css";
import "@styles/scrollbar.css";
//custom hooks
import { createContext } from "react";
import { useMediaQuery } from "@hooks/usMediaQuery";
//pages
import MainPage from "@pages/MainPage";
import { useTheme } from "@hooks/useTheme";

export const ScreenProfileContext = createContext(false);
export const ThemeContext = createContext<any>(null);

function App() {
  const isDesktop = useMediaQuery("(min-width:640px)");
  const { theme, setTheme } = useTheme();

  const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <ScreenProfileContext.Provider value={isDesktop}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </ScreenProfileContext.Provider>
    );
  };

  return (
    <ContextProvider>
      <Router basename="/Tulza-dev">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
