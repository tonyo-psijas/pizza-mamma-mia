import React from 'react'
import Button from 'react-bootstrap/Button';

export const Navbar = () => {

  const total = 25000;
  const token = false;

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-black">
            <div className="container">
            <a className="navbar-brand ms-2" href="#">Pizza Mamma Mia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav ms-auto ps-2">
                <a className="nav-item nav-link active" href="#">Home</a>

                {token ? (
                <>
                      <a className="nav-item nav-link" href="#">Log in</a>
                      <a className="nav-item nav-link me-2" href="#">Register</a>
                    </>
                  ) : (
                    <>
                      <a className="nav-item nav-link" href="#">Profile</a>
                      <a className="nav-item nav-link me-2" href="#">Log Out</a>
                    </>
                )}
                
                <Button variant="outline-info">Total: {total.toLocaleString('es-CL')}</Button>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}
