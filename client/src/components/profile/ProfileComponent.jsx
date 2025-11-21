import React from 'react'

const ProfileComponent = () => {
  return (
    <div className='form-section'>
        <div className='container'>
            <div className="profile-element mx-auto">
                <div className="perfil-header">
                    <img src="https://i.pinimg.com/originals/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" className=' foto-perfil' alt="perfil" />
                    <h4 className='fw-bold mb-0'>
                        Antonio Psijas
                    </h4>
                    <button className='btn btn-light'>Editar perfil <i class="fa-solid fa-pen-to-square"></i></button>
                </div>
                <br />

                <div className="perfil-body">
                    <div className="perfil-section d-flex flex-column flex-grow-1">
                        <h5 className='fw-bold'>Datos personales</h5>
                        <div className="perfil-dato">
                            <span className='fw-semibold'><i class="fa-solid fa-envelope"></i> Correo electrónico:</span> <span>appsijasig@gmail.com</span>
                        </div>
                        <div className="perfil-dato">
                            <span className='fw-semibold'><i class="fa-solid fa-phone"></i> Teléfono:</span> <span>+56 9 5016 4930</span>
                        </div>
                        <div className="perfil-dato">
                            <span className='fw-semibold'><i class="fa-solid fa-location-dot"></i>Dirección:</span> <span>Simón Bolivar 548</span>
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
                    <a href="#" className='text-dark text-decoration-none'>
                        <i class="fa-solid fa-arrow-left-from-bracket"></i> Cerrar sesión
                    </a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent