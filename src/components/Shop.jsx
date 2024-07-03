import React from 'react';
import Productos from './Productos';
function Shop() {
  return (
    <div className="container" id="productos">
      <div className="margin-top">
        <div className="row">
          <div className="col-lg-3 test"></div>
          <div className="col-lg-9 d-flex justify-content-start flex-wrap">
            <Productos/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
