import React, { useContext, useEffect, useState } from 'react'
import { CardComponent } from '../card/CardComponent'
import Button from 'react-bootstrap/Button';
import { PizzaContext } from '../../context/PizzaContext';

export const GridComponent = () => {

  const { pizzas } = useContext(PizzaContext)

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
              <CardComponent id={pizza.id} key={pizza.id} img={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />
            ))
          }

        </div>
    </div>
  )
}
