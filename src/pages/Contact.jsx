import React from 'react';
import './contact.css'
const Contact = () => {
  return <section className='contact'>
      <h2><span>4.</span> Contacto</h2>
      <div className='contact__container'>
        <p>
          Si has llegado hasta acá y te ha interesado alguno de mis proyectos, puedes dejarme un mensaje. Actualmente estoy disponible para recibir ofertas de trabajo, listo para trabajar en equipo y seguir aprendiendo.
        </p>
        <a className='contact__btn' href="#">
          <i className="fas fa-envelope"></i> Charlemos!
        </a>
      </div>
  </section>;
};

export default Contact; 