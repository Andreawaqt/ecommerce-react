import { useState, useEffect } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import ProductosController from "../controllers/ProductosController";

function Productos({ nombre, tipo, precio, categoria }) {

  const [edicion, setEdicion] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);

  const filteredProductos = productos.filter((producto) => {
    const nombreLowerCase = producto.Nombre.toLowerCase();
    const nombreBusquedaLowerCase = (nombre || '').toLowerCase();
    const nombreMatch = nombreBusquedaLowerCase ? nombreLowerCase.includes(nombreBusquedaLowerCase) : true;
    const tipoMatch = tipo ? producto.Tipo === tipo : true;
    const categoriaMatch = categoria ? producto.Categoria === categoria : true;
    const precioMatch = precio ? producto.Precio >= precio.min && producto.Precio <= precio.max : true;
    const filtro = nombreMatch && tipoMatch && precioMatch && categoriaMatch;

    return filtro;
  });


  async function getProductos() {
    const productosController = new ProductosController();
    const recs = await productosController.getProductos();
    if (recs.length) {
      setProductos(recs);
    } else {
      console.log(recs);
    }
  }

  useEffect(() => {
    getProductos();
  }, []);



  const handleEdicion = (producto) => {
    setEdicion(true);
    setProductoEnEdicion(producto);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProductoEnEdicion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const productosController = new ProductosController();
  
    try {
      await productosController.updateProducto(productoEnEdicion);
      setEdicion(false);
      setProductoEnEdicion(null);
      getProductos();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
      {filteredProductos.map((producto) => (
          <div className="col-md-4" key={producto.Id}>
            {edicion && productoEnEdicion?.Id === producto.Id ? (
              <Card className="mb-4">
                <Card.Body>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formNombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="Nombre"
                        value={productoEnEdicion.Nombre}
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formTipo">
                      <Form.Label>Tipo</Form.Label>
                      <Form.Control
                        type="text"
                        name="Tipo"
                        value={productoEnEdicion.Tipo}
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formCategoria">
                      <Form.Label>Categoría</Form.Label>
                      <Form.Control
                        type="text"
                        name="Categoria"
                        value={productoEnEdicion.Categoria}
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPrecio">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="number"
                        name="Precio"
                        value={productoEnEdicion.Precio}
                        onChange={handleFormChange}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Guardar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            ) : (
              <Card className="mb-4">
                <Card.Img variant="top" src={producto.Fotografias[0].signedUrl} />
                <Card.Body>
                  <Card.Title>{producto.Nombre}</Card.Title>
                  <Card.Text>{producto.Tipo}</Card.Text>
                  <Card.Text>{producto.Categoria}</Card.Text>
                  <Card.Text>{producto.Precio}€</Card.Text>
                  <Button onClick={() => handleEdicion(producto)}>Editar</Button>
                </Card.Body>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
