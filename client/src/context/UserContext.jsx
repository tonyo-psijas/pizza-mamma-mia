import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const register = async (nombre, email, contrasena, telefono, direccion) => {
        try {
            const resp = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ nombre, email, password: contrasena, telefono, direccion })
            })

            const data = await resp.json()
            if (data.error) throw new Error(data.error)

            if (data.token) {
                localStorage.setItem("token", data.token)
                await fetchUser()   // 🔥 obtenemos el user desde /me
            }

            return data

        } catch (err) {
            console.log("Error en registro:", err)
            throw err
        }
    }

    const login = async (email, password) => {
        try {
            const resp = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await resp.json()
            if (data.error) throw new Error(data.error)

            if (data.token) {
                localStorage.setItem("token", data.token)
                await fetchUser()  // 🔥 nuevamente, obtenemos el user real
            }

            return data

        } catch (error) {
            console.log("Error login:", error)
            throw error
        }
    }

    // 🔥 NUEVA FUNCIÓN PRINCIPAL
    const fetchUser = async () => {
        const token = localStorage.getItem("token")
        if (!token) return

        try {
            const resp = await fetch("http://localhost:5000/api/auth/me", {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await resp.json()

            // 🔥 reconstruimos el user agregando el token
            setUser({
                ...data,
                token
            })

        } catch (err) {
            console.log("Error cargando usuario:", err)
            setUser(null)
        }
    }

    // 🔥 cuando se inicia la app
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) fetchUser()
    }, [])

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider
