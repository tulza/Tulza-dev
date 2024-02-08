import MainPage from "@pages/MainPage";
import "@styles/styles.css";
import "@styles/fonts.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { createContext } from "react";
import { useMediaQuery } from "@hooks/usMediaQuery";

export const ScreenProfileContext = createContext(false);

function App() {
  const isMobile = useMediaQuery("(max-width:750px)");

  const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <ScreenProfileContext.Provider value={isMobile}>
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
