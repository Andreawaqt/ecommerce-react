import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Productos from "./components/Productos.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ShopNow from "./components/ShopNow.jsx";

function App() {
  const [edicion, setEdicion] = useState(false);
  return (
    <>
    <Header />
        <Hero />
        <ShopNow />
      <Productos edicion={edicion}setEdicion={setEdicion}></Productos>
    </>
  );
}

export default App;
