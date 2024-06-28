import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import ProductosController from "./controllers/ProductosController.js";

function App() {
  const [productos, setProductos] = useState([]);

  console.log("productes app ", productos);


  async function getdata() {
    console.log("entra getdata");
    const productosController = new ProductosController();
    let data = await productosController.getProductos();
    console.log("dins getdata",data);
      setProductos(data);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <h1>header</h1>
        </header>
      </div>
      {productos.map((producto) => (
        <div key={producto.id}>{producto.Nombre}</div>
      ))}
      <Outlet />
    </>
  );
}

export default App;
