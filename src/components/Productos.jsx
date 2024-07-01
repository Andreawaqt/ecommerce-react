import ProductosController from "../controllers/ProductosController.js";
import { useState, useEffect } from "react";

function Productos({ edicion, setEdicion }) {
  const [productos, setProductos] = useState([]);

  async function getdata() {
    const productosController = new ProductosController();
    let data = await productosController.getProductos();
    setProductos(data);
  }

  useEffect(() => {
    getdata();
  }, []);

  const handleEdicion = () => {
    setEdicion(true);
    console.log(edicion);
  };

  if (edicion) {
    return (
      <>
        <form method="post">
        <label for="id">Id</label>
        <input type="text" id="id" name="id" placeholder="Id del producto" required />
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre del producto"
            required
          />
          <label for="tipo">Tipo</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Tipo del producto"
            required
          />
          <label for="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            placeholder="Categoria del producto"
            required
          />
          <label for="precio">Precio</label>
          <input
            type="number"
            id="precio"
            name="precio"
            placeholder="Precio del producto"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
  return (
    <>
      {productos.map((producto) => (
        <div id={producto.Id} key={producto.Id} onClick={handleEdicion}>
          <p>{producto.Nombre}</p>
          <p>{producto.Tipo}</p>
          <p>{producto.Categoria}</p>
          <p>{producto.Precio}</p>
        </div>
      ))}
    </>
  );
}
export default Productos;
