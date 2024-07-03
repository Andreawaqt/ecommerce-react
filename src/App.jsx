import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Productos from "./components/Productos.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ShopNow from "./components/ShopNow.jsx";
import Shop from "./components/Shop.jsx";
import About from "./components/About.jsx";

function App() {
  const [edicion, setEdicion] = useState(false);
  return (
    <>
    <div id="home"></div>
    <Header />
        <Hero />
        <ShopNow />

        <Shop/>
        <About/>
      <Productos edicion={edicion}setEdicion={setEdicion}></Productos>
    </>
  );
}

export default App;
