import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        email: "",
        nombre: "",
        contrasena: "",
        telefono: "",
        direccion: "",
        token: false
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider