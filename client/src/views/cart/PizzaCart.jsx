import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const PizzaCart = () => {

    const { listaPizzas, setListaPizzas } = useContext(CartContext) 

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // const pagarHandler = (e) => {
    //     e.preventDefault()
    //     setListaPizzas(listaPizzas)
    // }
    
    const aumentarCantidad = (pizza) => {
        const nuevasPizzas = listaPizzas.map(p => 
            p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
        setListaPizzas(nuevasPizzas)
    }
    
    const disminuirCantidad = (pizza) => {
        if (pizza.cantidad <= 1) {
            eliminarPizza(pizza)
        } else {
            const nuevasPizzas = listaPizzas.map(p => 
                p.id === pizza.id ? { ...p, cantidad: p.cantidad - 1 } : p
            )
            setListaPizzas(nuevasPizzas)
        }
    }

    let total = 0
    listaPizzas.forEach(pizza => {
        total += pizza.price * pizza.cantidad
    })
    

    const eliminarPizza = (pizza) => {
        const pizzasFiltradas = listaPizzas.filter(e => e.id !== pizza.id)
        setListaPizzas(pizzasFiltradas)
    }

  return (
    <>
        <section className='section cart-section'>
            <div className='container'>
                <h3 className='mb-4'>Detalles del pedido</h3>

                <ul className='pizza-cart-list'>
                    {listaPizzas.map(pizza =>
                        <li key={pizza.id} className='pizza-cart-element'>
                            <div className='d-flex align-items-center gap-2 gap-md-4'>
                                <img src={pizza.img} alt="" />
                                <div>
                                    <span className='fw-normal'>{capitalize(pizza.name)}</span>
                                    <h5 className='me-4 fw-bold'>${(pizza.price * pizza.cantidad).toLocaleString('es-CL')}</h5>
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