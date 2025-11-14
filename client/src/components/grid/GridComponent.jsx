import React, { useEffect, useState } from 'react'
import { CardComponent } from '../card/CardComponent'
import Button from 'react-bootstrap/Button';

export const GridComponent = () => {

  const [pizzas, setPizzas] = useState([])

  const apiurl = 'http://localhost:5000/api/pizzas'

  const getApi = async () => {
    const resp = await fetch(apiurl)
    const data = await resp.json()
    console.log(data)
    setPizzas(data)
  }

  useEffect(()=>{
    getApi()
  }, [])

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
              <CardComponent key={pizza.id} img={pizza.img} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />
            ))
          }

        </div>
    </div>
  )
}
