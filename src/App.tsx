import Navigation from "@components/Navigation";
import Template from "@components/pages/Template";
import "@styles/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/vite-react-ts-template">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Template />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
