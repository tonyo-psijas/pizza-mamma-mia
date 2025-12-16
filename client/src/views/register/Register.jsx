import React, { use, useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate()

    const { register } = useContext(UserContext)

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [confirmContra, setConfirmContra] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')

    const [errorGeneral, setErrorGeneral] = useState('')
    const [errorContra, setErrorContra] = useState('')
    const [errorContraLength, setErrorContraLength] = useState('')

    const [success, setSuccess] = useState('')

    const validarDatos = () => {

        setErrorGeneral('')
        setErrorContra('')
        setErrorContraLength('')

        if(!nombre.trim() || !email.trim() || !contrasena.trim() || !confirmContra.trim() || !direccion.trim() || !telefono.trim()) {
            setErrorGeneral('Todos los campos son obligatorios');
            return false;
        }
        
        if (contrasena !== confirmContra) {
            setErrorContra('Las contraseñas no coinciden');
            return false;
        }
        
        if (contrasena.length < 6) {
            setErrorContraLength('La contraseña debe tener al menos 6 caracteres');
            return false;
        }

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            
        if (!validarDatos()) return;

        try {
            const resp = await register(nombre, email, contrasena, telefono, direccion)

            if (resp?.token) {
                setNombre('')
                setEmail('')
                setTelefono('')
                setDireccion('')
                setContrasena('')
                setConfirmContra('')

                setSuccess('¡Tu cuenta ha sido creada exitosamente!')

                navigate("/profile")

            }
        } catch (error) {
            setErrorGeneral("Error al registrar usuario")
        }

    }

  return (
    <>
        <div className="form-section">

            <div className="container">
                <form className='formulario mx-auto pt-5' onSubmit={handleSubmit}>
                    <h3 className='form-title'>Crea tu cuenta</h3>

                    {errorGeneral ? <p className='error'>{errorGeneral}</p> : null}

                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" name='nombre' 
                        onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name='email' 
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="text" className="form-control" name='telefono' 
                        onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                    </div>

                    <div className="form-group">
                        <label>Dirección</label>
                        <input type="text" className="form-control" name='direccion' 
                        onChange={(e) => setDireccion(e.target.value)} value={direccion}/>
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

                    <button type='submit' className='btn btn-success'>Crear cuenta</button>

                    <a href="#" className='ya-tengo-cuenta text-dark' onClick={() => navigate("/login")}>Ya tengo una cuenta</a>

                    <p className='mensajeExito'>{success}</p>
                </form>
            </div>
        </div>
    </>
  )
}
