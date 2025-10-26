import React from 'react'
import { CardComponent } from '../card/CardComponent'
import Button from 'react-bootstrap/Button';

export const GridComponent = () => {

  const pizzas = [
    {
      src: 'https://hoycocino.com.ar/wp-content/uploads/2023/08/pizza-margarita.jpg',
      nombre: 'Pizza Margarita',
      ingredientes: 'Mozzarella, salsa de pomodoro, albahaca',
      precio: 5950
    },
    {
      src: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg',
      nombre: 'Pizza Española',
      ingredientes: 'Mozzarella, salsa de pomodoro, pepperoni, pimentón, aceitunas',
      precio: 6890
    },
    {
      src: 'https://bakesquare.in/wp-content/uploads/2023/04/hot-homemade-pepperoni-pizza.jpg',
      nombre: 'Pizza Pepperoni',
      ingredientes: 'Mozzarella, salsa de pomodoro, pepperoni, orégano',
      precio: 6290
    }
  ]

  return (
    <div className='grid-section'>
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
