import React, { useState } from 'react'
import { pizzas } from '../Pizzas'

const PizzaCart = () => {

    const [listaPizzas, setListaPizzas] = useState(pizzas)

    const pagarHandler = (e) => {
        e.preventDefault()
        setListaPizzas(listaPizzas)
    }
    
    const aumentarCantidad = (pizza) => {
        const nuevasPizzas = listaPizzas.map(p => 
            p.nombre === pizza.nombre ? { ...p, cantidad: p.cantidad + 1 } : p
        )
        setListaPizzas(nuevasPizzas)
    }
    
    const disminuirCantidad = (pizza) => {
        if (pizza.cantidad <= 1) {
            eliminarPizza(pizza)
        } else {
            const nuevasPizzas = listaPizzas.map(p => 
                p.nombre === pizza.nombre ? { ...p, cantidad: p.cantidad - 1 } : p
            )
            setListaPizzas(nuevasPizzas)
        }
    }

    let total = 0
    listaPizzas.forEach(pizza => {
        total += pizza.precio * pizza.cantidad
    })
    

    const eliminarPizza = (pizza) => {
        const pizzasFiltradas = listaPizzas.filter(e => e.nombre !== pizza.nombre)
        setListaPizzas(pizzasFiltradas)
    }

  return (
    <>
        <section className='section cart-section'>
            <div className='container'>
                <h3 className='mb-4'>Detalles del pedido</h3>

                <ul className='pizza-cart-list'>
                    {listaPizzas.map(pizza =>
                        <li key={pizza.nombre} className='pizza-cart-element'>
                            <div className='d-flex align-items-center gap-2 gap-md-4'>
                                <img src={pizza.src} alt="" />
                                <div>
                                    <span className='fw-normal'>{pizza.nombre}</span>
                                    <h5 className='me-4 fw-bold'>${(pizza.precio * pizza.cantidad).toLocaleString('es-CL')}</h5>
                                </div>
                                
                            </div>
                            <div className='botones-agregar'>
                                
                                <button className='cart-btn' onClick={() => disminuirCantidad(pizza)}>-</button>
                                <span className='mx-3'><strong>{pizza.cantidad}</strong></span>
                                <button className='cart-btn' onClick={() => aumentarCantidad(pizza)}>+</button>
                            </div>
                        </li>
                    )}
                </ul>

                <hr />
                
                <div className="total-cart">
                    <h4 className='fw-bold'>Total: ${total.toLocaleString('es-CL')}</h4>
                    <button className='btn-pagar bg-success'>Pagar pedido</button>
                </div>

            </div>
        </section>

    </>
  )
}

export default PizzaCart