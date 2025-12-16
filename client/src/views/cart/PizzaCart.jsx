import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

const PizzaCart = () => {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { user } = useContext(UserContext)

    const token = Boolean(user?.token)

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

    const pagarHandler = async () => {


        if (!user?.token) return

        try {
            const payload = {
                items: listaPizzas.map(pizza => ({
                    pizzaId: pizza.id,
                    cantidad: pizza.cantidad,
                    precio: pizza.price
                })),
                total
            }

            const resp = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${user.token}`
                },
                body: JSON.stringify(payload)
            })

            const data = await resp.json()

            if (!resp.ok) {
                throw new Error(data.error)
            }

            console.log("Pedido creado:", data)

            setListaPizzas([])
            setSuccess("Pedido realizado con éxito")

        } catch (error) {
            console.log("Error en el checkout:", error)
            setError("No se pudo completar el pedido")
        }
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

                {error ? <p className='error'>{error}</p> : null}
                <p className='mensajeExito'>{success}</p>

                <hr />
                
                <div className="total-cart">
                    <h4 className='fw-bold'>Total: ${total.toLocaleString('es-CL')}</h4>
                    <button
                        className={`btn-pagar bg-success ${!token ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!token}
                        onClick={pagarHandler}>
                            Pagar pedido
                    </button>
                </div>

            </div>
        </section>

    </>
  )
}

export default PizzaCart