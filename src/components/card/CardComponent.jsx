import React from 'react'
import Button from 'react-bootstrap/Button';

export function CardComponent({ nombre, src, ingredientes, precio }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
      <div className="card pizza-card mx-2 h-100">
        <img src={src} className="card-img-top" alt="Pizza" />
        <div className="card-body">
          <div className="pizza-info">
            <h5 className="card-title fw-bold mb-3">{nombre}</h5>
            <p className="card-text h6 fw-light">{ingredientes}</p>
          </div>
          <hr />
          <div className="cardfooter d-flex justify-content-between align-items-center">
            <div className="fw-bold py-0">${precio.toLocaleString('es-CL')}</div>
            <Button variant="dark">Añadir</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
