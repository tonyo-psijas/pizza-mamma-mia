import React from 'react'
import Button from 'react-bootstrap/Button';


export const HeroComponent = () => {
  return (
    <div className='hero-section'>
        <div>
            <h1>PIZZA MAMMA MIA!</h1>
            <p>DE ITALIA A TU CASA CON MOLTO AMORE</p>
        </div>

        <Button variant="success">Ordenar ahora</Button>
    </div>
  )
}
