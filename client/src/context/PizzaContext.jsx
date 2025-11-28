import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext()

const PizzaProvider = ({ children }) => {

    const [pizzas, setPizzas] = useState([])

    const apiurl = 'http://localhost:5000/api/pizzas'
    
    const getApi = async () => {
        const resp = await fetch(apiurl)
        const data = await resp.json()
    
        const pizzasConCantidad = data.map(pizza => ({
            ...pizza,
            cantidad: 1
        }))
        setPizzas(pizzasConCantidad)
    }
    
    useEffect(()=>{
            getApi()
    }, [])

    return(
        <PizzaContext.Provider value={{pizzas, setPizzas}}>
            {children}
        </PizzaContext.Provider>
    )

}

export default PizzaProvider