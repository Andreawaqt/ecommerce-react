import ProductosController from "../controllers/ProductosController.js";
import { useEffect } from "react";

function Productos() {

  async function getdata() {
    const productosController = new ProductosController();
    let data = await productosController.getProductos();
    setProductos(data);
  }

  useEffect(() => {
    getdata();
  }, []);

  
  return (
    <>
      {productos.map((producto) => (
        <div className="col-lg-4 py-2 d-block">
          <div id={producto.Id} key={producto.Id} onClick={handleEdicion}>
            <p>{producto.Nombre}</p>
            <p>{producto.Tipo}</p>
            <p>{producto.Categoria}</p>
            <p>{producto.Precio}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default Productos;
