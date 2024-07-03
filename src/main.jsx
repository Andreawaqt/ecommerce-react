import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Hero from "./components/Hero.jsx";
import Productos from "./components/Productos.jsx";
import NotFound from "./components/NotFound.jsx";
import About from "./components/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          <Route path="/productos/:id" element={<Productos />} />
          <Route path="/about" element={<About/>}/>
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
