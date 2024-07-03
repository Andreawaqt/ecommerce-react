import { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import ProductosController from "../controllers/ProductosController";
function Productos({ edicion, setEdicion }) {
  const [productos, setProductos] = useState([]);


  async function getProductos() {
    const productosController = new ProductosController();
    const recs = await productosController.getProductos();
    if (recs.length) {
      setProductos(recs);
    } else {
      console.log(recs)
    }
  }


  useEffect(() => {
    getProductos();
    // axios.get ('https://app.nocodb.com/api/v2/tables/m920zf4jt60rlt5/records?limit=25&shuffle=0&offset=0')
    //   .then (response => {
    //     setProductos (response.data.list);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  const handleEdicion = () => {
    setEdicion(true);
    console.log(edicion);
  };

  if (edicion) {
    return (
      <>
        <form method="post">
          <label htmlFor="id">Id</label>
          <input type="text" id="id" name="id" placeholder="Id del producto" required />
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre del producto"
            required
          />
          <label htmlFor="tipo">Tipo</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Tipo del producto"
            required
          />
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            placeholder="Categoria del producto"
            required
          />
          <label htmlFor="precio">Precio</label>
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
    <div className="container">
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.Id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={producto.Fotografias[0].signedUrl} />
              <Card.Body>
                <Card.Title>{producto.Nombre}</Card.Title>
                <Card.Text> {producto.Tipo}</Card.Text>
                <Card.Text>{producto.Categoria}</Card.Text>
                <Card.Text>{producto.Precio}€</Card.Text>
                <Button onClick={handleEdicion}>Editar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Productos;

