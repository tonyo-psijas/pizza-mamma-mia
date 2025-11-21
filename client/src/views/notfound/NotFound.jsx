import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-page'>

      <iframe src="https://giphy.com/embed/dOOKk7VHAvJja" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-simpsons-pizza-homer-simpson-dOOKk7VHAvJja">via GIPHY</a></p>

      <h1>¡Ups! Error 404</h1>
      <p>Lo sentimos, pero el sitio que estás buscando no está disponible.</p>
      <Link to='/'><Button variant="success">Volver al inicio</Button></Link>
    </div>
  )
}

export default NotFound