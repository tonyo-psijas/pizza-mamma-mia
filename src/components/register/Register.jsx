import React, { use, useState } from 'react'

export const Register = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [confirmContra, setConfirmContra] = useState('')

    const [errorGeneral, setErrorGeneral] = useState('')
    const [errorContra, setErrorContra] = useState('')
    const [errorContraLength, setErrorContraLength] = useState('')

    const [success, setSuccess] = useState('')

    const validarDatos = (e) => {
        e.preventDefault()

        setErrorGeneral('')
        setErrorContraLength('')

        if(!nombre.trim() || !email.trim() || !contrasena.trim() || !confirmContra.trim()) {
            setErrorGeneral('Todos los campos son obligatorios');
            return;
        } else if (contrasena !== confirmContra) {
            setErrorContra('Las contraseñas no coinciden');
            return;
        } else if (contrasena.length < 6) {
            setErrorContraLength('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setNombre('')
        setEmail('')
        setContrasena('')
        setConfirmContra('')

        setSuccess('¡Tu cuenta ha sido creada exitosamente!')

    }

  return (
    <>
        <div className="form-section">

            <div className="container">
                <form className='formulario mx-auto pt-5' onSubmit={validarDatos}>
                    <h3 className='form-title'>Crea tu cuenta</h3>

                    {errorGeneral ? <p className='error'>{errorGeneral}</p> : null}

                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" name='nombre' 
                        onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </div>

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

                    <div className="form-group">
                        <label>Confirmar contraseña</label>
                        <input type="password" className="form-control" name='confirmar-contrasena' 
                        onChange={(e) => setConfirmContra(e.target.value)} value={confirmContra}/>
                    </div>

                    {errorContra ? <p className='error'>{errorContra}</p> : null}

                    <button type='submit' className='btn btn-success'>Enviar</button>

                    <a href="#" className='ya-tengo-cuenta text-dark'>Ya tengo una cuenta</a>

                    <p className='mensajeExito'>{success}</p>
                </form>
            </div>
        </div>
    </>
  )
}
