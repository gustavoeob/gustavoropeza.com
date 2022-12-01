import "./styles/scss/main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appbar from "./components/views/navbar/appbar";
import Home from "./components/pages/home/home";

function App() {
  return (
    <>
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
