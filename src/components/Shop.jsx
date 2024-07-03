import React, { useState } from 'react';
import Productos from './Productos';

function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterPrice, setFilterPrice] = useState({
    min: 0,
    max: Infinity,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClass = (e) => {
    setFilterClass(e.target.value);
  };

  const handleFilterPrice = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setFilterPrice((prevState) => ({
      ...prevState,
      [type]: isNaN(value) ? '' : value,
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
                value={searchTerm}
                onChange={handleSearch}
                className="form-control mb-3"
              />
              <select
                value={filterClass}
                onChange={handleFilterClass}
                className="form-control mb-3"
              >
                <option value="">Busca un tipo de producto</option>
                <option value="clase1">Clase 1</option>
                <option value="clase2">Clase 2</option>
                {/* Agrega más opciones de clase aquí */}
              </select>
              <div className="price-filter mb-3">
                <label htmlFor="min-price">Precio mínimo:</label>
                <input
                  type="number"
                  id="min-price"
                  value={filterPrice.min}
                  onChange={(e) => handleFilterPrice(e, 'min')}
                  className="form-control"
                />
              </div>
              <div className="price-filter">
                <label htmlFor="max-price">Precio máximo:</label>
                <input
                  type="number"
                  id="max-price"
                  value={filterPrice.max}
                  onChange={(e) => handleFilterPrice(e, 'max')}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9 productos-container">
            <Productos
              searchTerm={searchTerm}
              filterClass={filterClass}
              filterPrice={filterPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
