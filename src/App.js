import "./styles/scss/main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appbar from "./components/views/navbar/appbar";
import Home from "./components/pages/home/home";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
const {theme}  = useContext(ThemeContext);
  return (
    <div id={theme}>
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
