import React, { useState } from 'react'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')


    const [errorGeneral, setErrorGeneral] = useState('')
    const [errorContraLength, setErrorContraLength] = useState('')

    const [success, setSuccess] = useState('')

    const validarDatos = (e) => {
        e.preventDefault()

        setErrorGeneral('')
        setErrorContraLength('')

        if(!email.trim() || !contrasena.trim()) {
            setErrorGeneral('Todos los campos son obligatorios');
            return;
        } else if (contrasena.length < 6) {
            setErrorContraLength('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setEmail('')
        setContrasena('')

        setSuccess('¡Listo! ya has entrado a tu cuenta')

    }

  return (
    <>
        <div className="form-section">

            <div className="container">
                <form className='formulario mx-auto pt-5' onSubmit={validarDatos}>
                    <h3 className='form-title'>Iniciar sesión</h3>

                    {errorGeneral ? <p className='error'>{errorGeneral}</p> : null}

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name='email' 
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" name='contrasena' 
                        onChange={(e) => setContrasena(e.target.value)} value={contrasena}/>
                    </div>

                    {errorContraLength ? <p className='error'>{errorContraLength}</p> : null}

                    <button type='submit' className='btn btn-success'>Enviar</button>

                    <a href="#" className='ya-tengo-cuenta text-dark'>Crear cuenta</a>

                    <p className='mensajeExito'>{success}</p>
                </form>
            </div>
        </div>
    </>
  )
}
