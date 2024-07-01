import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Productos from "./components/Productos.jsx";
import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
function App() {
  const [edicion, setEdicion] = useState(false);
  return (
    <>
    <Header/>
    <Hero />
      <div className="container">
        <header>
          
        </header>
      </div>
      <Productos edicion={edicion}setEdicion={setEdicion}></Productos>
    </>
  );
}

export default App;
