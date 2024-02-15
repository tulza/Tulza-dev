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

export const ScreenProfileContext = createContext(false);

function App() {
  const isDesktop = useMediaQuery("(min-width:640px)");

  const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <ScreenProfileContext.Provider value={isDesktop}>
        {children}
      </ScreenProfileContext.Provider>
    );
  };

  return (
    <ContextProvider>
      <Router basename="/Tulza-dev">
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
