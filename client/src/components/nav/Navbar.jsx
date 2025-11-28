import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Navbar = () => {

  const { listaPizzas } = useContext(CartContext)

  const total = listaPizzas.reduce((acc, p) => acc + p.price * p.cantidad, 0);
  const token = false;

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-black">
            <div className="container">
            <Link to='/' className='navbar-brand ms-2'>Pizza Mamma Mia</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav ms-auto ps-2">
                <Link to='/' className='nav-item nav-link'>Home</Link>

                {token ? (
                <>
                      <Link to='/login' className='nav-item nav-link'>Log in</Link>
                      <Link to='/register' className='nav-item nav-link'>Register</Link>
                    </>
                  ) : (
                    <>
                      <Link to='/profile' className='nav-item nav-link'>Profile</Link>
                      <a className="nav-item nav-link me-2" href="#">Log Out</a>
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
