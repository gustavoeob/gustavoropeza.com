import "./styles/scss/main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Appbar from "./components/views/navbar/appbar";
import Home from "./components/pages/home/home";
import { useEffect, useState } from "react";
import Spinner from "./components/views/spinner";

function App() {
  useEffect(()=>{
      setTimeout(()=> {
        setLoading(false)
      },2200)
    },[])
  const [loading, setLoading] = useState(true)
  if (loading) return <Spinner />

  return (
    <div >
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={!loading ? <Home /> : setLoading(true)} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
