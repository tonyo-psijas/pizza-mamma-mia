import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ProfileComponent = () => {

    const { user, setUser, logout } = useContext(UserContext)

    const [userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate()

    const getUserInfo = async () => {
        try {
            const resp = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await resp.json()
            console.log("user info:", data)
            setUserInfo(data)

        } catch (error) {
            console.log("Error fetching user info:", error)
        }
    }

    useEffect(() =>{
        getUserInfo()
    }, [])

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    const handleLogout = () => {
        logout()
      }

    if (!userInfo) return <p>Cargando...</p>

    

  return (
    <div className='form-section'>
        <div className='container'>
            <div className="profile-element mx-auto">
                <div className="perfil-header">
                    <img src="https://i.pinimg.com/originals/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" className=' foto-perfil' alt="perfil" />
                    <h4 className='fw-bold mb-0'>
                        {userInfo.nombre}
                    </h4>
                    <button className='btn btn-light'>Editar perfil <i class="fa-solid fa-pen-to-square"></i></button>
                </div>
                <br />

                <div className="perfil-body">
                    <div className="perfil-section d-flex flex-column flex-grow-1">
                        <h5 className='fw-bold'>Datos personales</h5>
                        <div className="perfil-dato">
                            <span className='fw-semibold'><i class="fa-solid fa-envelope"></i> Correo electrónico:</span> <span>{userInfo.email}</span>
                        </div>
                        <div className="perfil-dato">
                            <span className='fw-semibold'><i class="fa-solid fa-phone"></i> Teléfono:</span> <span>{userInfo.telefono}</span>
                        </div>
                        <div className="perfil-dato">
                            <span className='fw-semibold'><i class="fa-solid fa-location-dot"></i>Dirección:</span> <span>{userInfo.direccion}</span>
                        </div>
                        <br />
                        <a href="#" className='text-danger'>Editar</a>
                    </div>

                    <div className="perfil-section d-flex flex-column flex-grow-1">
                        <h5 className='fw-bold'>Mis puntos</h5>
                        <div className="puntos d-flex flex-column">
                            <span className='fs-1 fw-bold'>0</span>
                            <span>Puntos acumulados</span>
                        </div>
                        
                    </div>
                </div>

                <br />

                <div className="cerrar-sesion d-flex justify-content-center">
                    <a href="#" className='text-dark text-decoration-none' onClick={handleLogout}>
                        <i className="fa-solid fa-arrow-left-from-bracket"></i> Cerrar sesión
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent