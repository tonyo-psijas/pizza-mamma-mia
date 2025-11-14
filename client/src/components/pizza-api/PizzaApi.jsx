import React, { useEffect, useState } from 'react'

const PizzaApi = () => {

    const [pizzaInfo, setPizzaInfo] = useState(null)

    const apiurl = 'http://localhost:5000/api/pizzas/p001'

    const getApi = async () => {
        const resp = await fetch(apiurl)
        const data = await resp.json()
        setPizzaInfo(data)
    }

    useEffect(()=>{
        getApi()
    }, [])

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

    if (!pizzaInfo) return <h3>Cargando...</h3>

  return (
    <div className='container h-100 d-flex justify-content-center align-items-center'>
        <div className='pizza-card-api card'>
            <img src={pizzaInfo.img} alt="pizza" className='card-img-top' />

            <div className="card-body p-2">
                <div className="pizza-info">
                    <h5 className='fw-bold'>{capitalize(pizzaInfo.name)}</h5>
                    <p>{pizzaInfo.desc}</p>
                    <ul className='lista-ingredientes'>
                        {pizzaInfo.ingredients?.map((ingrediente) => (
                        <li key={ingrediente}>
                            {capitalize(ingrediente)}
                        </li>
                        ))}
                    </ul>

                    <div className="fw-bold py-0 fs-5">
                        ${pizzaInfo.price.toLocaleString('es-CL')}
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default PizzaApi