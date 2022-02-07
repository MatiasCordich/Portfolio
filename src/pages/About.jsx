import React from 'react';
import './about.css'

const About = () => {
  return <section className='about' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
      <h1 className='about__title'> <span>1.</span> Sobre Mí</h1>

      <p className='about__text'>
        Vivo en la Ciudad de Buenos Aires, <span>Argentina</span>, tengo 25 años.
      </p>
      <p className='about__text'>
        Mis primeros pasos en el mundo de la programación los dí a comienzos del 2021 cuando, finalmente, decidí aventurarme en el mundo del desarollo web y así, poder encontrar un ecosistema que una mis dos pasiones, el <span>diseño</span> y la <span>computación</span>.
        Siempre me caractericé por mi enorme <span>curiosidad</span> a la hora de aprender algo de este mundo. El saber el "<span>¿cómo funcionan?</span>" las cosas y su lógica, ya sea de un lenguaje o un framework.   
      </p>
      <p className='about__text'>
        Actualmente me encuentro realizando mis estudios en el bootcamp de programación NUCBA, en la carrera de <span>Desarollo Full Stack</span> orientado en el stack <span>MERN</span>. Desarollando proyectos integradores junto con mentores especializados en la industria.
      </p>
      <p className='about__text'>
        Cuando no estoy programando, estoy leyendo algun libro, escuchando música o jugando con el cubo de Rubik.
      </p>
  </section>;
};

export default About;
