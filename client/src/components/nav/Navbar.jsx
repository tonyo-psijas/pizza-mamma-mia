import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

export const Navbar = () => {

  const { listaPizzas } = useContext(CartContext)
  const { user, setUser } = useContext(UserContext)

  const total = listaPizzas.reduce((acc, p) => acc + p.price * p.cantidad, 0);

  const navigate = useNavigate()

  const token = user.token;

  const handleLogout = () => {
    setUser({
      ...user, token: false
    })
    navigate("/login")
  }

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-black">
            <div className="container">
            <NavLink to='/' className='navbar-brand ms-2'>Pizza Mamma Mia</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav ms-auto ps-2">
                <NavLink to='/' className='nav-item nav-link'>Home</NavLink>

                {token ? (
                    <>
                      <NavLink to='/profile' className='nav-item nav-link'>Profile</NavLink>
                      <a className="nav-item nav-link me-2" href="#"
                      onClick={handleLogout}>Log Out</a>
                    </>
                    
                  ) : (
                    <>
                      <NavLink to='/login' className='nav-item nav-link'>Log in</NavLink>
                      <NavLink to='/register' className='nav-item nav-link'>Register</NavLink>
                    </>
                )}
                
                <Link to='/cart'>
                  <Button variant="outline-info">Total: {total.toLocaleString('es-CL')}</Button>
                </Link>
                
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}
