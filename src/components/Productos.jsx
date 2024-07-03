import ProductosController from "../controllers/ProductosController.js";
import { useEffect } from "react";

function Productos() {


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

