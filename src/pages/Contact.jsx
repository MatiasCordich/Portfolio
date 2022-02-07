import React from 'react';
import './contact.css'
const Contact = () => {
  return <section className='contact' data-aos="fade-up"
  data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-delay="400">
      <h2><span>4.</span> Contacto</h2>
      <div className='contact__container'>
        <p>
          Si has llegado hasta acá y te ha interesado alguno de mis proyectos, puedes dejarme un mensaje. Actualmente estoy disponible para recibir ofertas de trabajo, listo para trabajar en equipo y seguir aprendiendo.
        </p>
        <a className='contact__btn' href="mailto:m.cordich20@gmail.com">
          <i className="fas fa-envelope"></i> Charlemos!
        </a>
      </div>
  </section>;
};

export default Contact; 