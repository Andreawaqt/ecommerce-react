import React, { useState } from "react";
import Productos from "./Productos";

function Shop() {
  const [nombre, setSearchTerm] = useState("");
  const [tipo, setFilterClass] = useState("");
  const [categoria, setCategoria] = useState("");

  const [precio, setFilterPrice] = useState({
    min: 0,
    max: 1000,
  });

  const handleNombre = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTipo = (e) => {
    setFilterClass(e.target.value);
  };

  const handleCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleFilterPrice = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setFilterPrice((prevState) => ({
      ...prevState,
      [type]: isNaN(value) ? "" : value,
    }));
  };

  return (
    <div className="container" id="productos">
      <div className="margin-top">
        <div className="row">
          <div className="col-lg-3">
            <div className="filter-bar">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={nombre}
                onChange={handleNombre}
                className="form-control mb-3"
              />
              <select
                value={tipo}
                onChange={handleTipo}
                className="form-control mb-3"
              >
                <option value="">Busca la tipo de un producto</option>
                <option value="Camisetas">Camisetas</option>
                <option value="Tops y bodies">Tops y bodies</option>
                <option value="Camisas y blusas">Camisas y blusas</option>
                <option value="Vestidos">Vestidos</option>
                <option value="Petos y monos">Petos y monos</option>
                <option value="Faldas">Faldas</option>
                <option value="Jeans y shorts">Jeans y shorts</option>
                <option value="Cazadoras y chaquetas">
                  Cazadoras y chaquetas
                </option>
                <option value="Sudaderas">Sudaderas</option>
                <option value="Sandalias planas">Sandalias planas</option>
                <option value="Faldas">Faldas</option>
                <option value="Zapatillas">Zapatillas</option>
                <option value="Bisuteria">Bisuteria</option>
                <option value="Gafas de sol">Gafas de sol</option>
                <option value="Gorras y gorros">Gorras y gorros</option>
              </select>
              <select
                value={categoria}
                onChange={handleCategoria}
                className="form-control mb-3"
              >
                <option value="">Selecciona una categoría</option>
                <option value="Ropa">Ropa</option>
                <option value="Zapatos">Zapatos</option>
                <option value="Accesorios">Accesorios</option>

              </select>

              <div className="price-filter mb-3">
                <label htmlFor="min-price">Precio mínimo:</label>
                <input
                  type="number"
                  id="min-price"
                  value={precio.min}
                  onChange={(e) => handleFilterPrice(e, "min")}
                  className="form-control"
                />
              </div>
              <div className="price-filter">
                <label htmlFor="max-price">Precio máximo:</label>
                <input
                  type="number"
                  id="max-price"
                  value={precio.max}
                  onChange={(e) => handleFilterPrice(e, "max")}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9 productos-container">
            <Productos nombre={nombre} tipo={tipo} precio={precio} categoria={categoria} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
