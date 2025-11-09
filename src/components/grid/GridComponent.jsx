import React from 'react'
import { CardComponent } from '../card/CardComponent'
import Button from 'react-bootstrap/Button';
import { pizzas } from '../Pizzas';

export const GridComponent = () => {

  return (
    <div className='section'>
      <div className="container">
        <div className="section-titulo">
          <h2>Le nostre <strong>pizze</strong></h2>
          <Button variant="danger">Ver más</Button>
        </div>
        <hr />
      </div>
        <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

          {
            pizzas.map(pizza =>(
              <CardComponent src={pizza.src} nombre={pizza.nombre} ingredientes={pizza.ingredientes} precio={pizza.precio} />
            ))
          }

        </div>
    </div>
  )
}
