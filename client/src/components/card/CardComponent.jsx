import React from 'react'
import Button from 'react-bootstrap/Button';

export function CardComponent({ name, img, ingredients, price, id }) {

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
      <div className="card pizza-card mx-2 h-100">
        <img src={img} className="card-img-top" alt="Pizza" />
        <div className="card-body">
          <div className="pizza-info">
            <h5 className="card-title fw-bold mb-3">{capitalize(name)}</h5>
            <ul className='lista-ingredientes'>
              {ingredients.map(ingrediente =>
                <li key={ingrediente}>
                  {capitalize(ingrediente)}
                </li>
              )}
            </ul>
          </div>
          <hr />
          <div className="cardfooter d-flex justify-content-between align-items-center">
            <div className="fw-bold py-0">${price.toLocaleString('es-CL')}</div>
            <Button variant="dark">Añadir</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
