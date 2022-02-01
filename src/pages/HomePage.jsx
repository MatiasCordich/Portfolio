import './homepage.css'
import image from '../images/matias.png'

const HomePage = () => {
  return (
    <section className='home'>
        <div className='home__image'>
          <div className='circle'>
            <img className='circle__image' src={image} alt="matias" />
          </div>
        </div>
        <div className='home__content'>
            <div className='home__text'>
              <h1>Hola</h1>
              <h2>Me llamo Matias</h2>
              <p>
                Soy <span>Full Stack Developer</span> orientado al <span>Front End</span> y trabajando con el stack <span>MERN</span>. Actualmente me encuentro realizando mis propios proyectos.
              </p>
            </div>
            <div className='home__btn-social'>

              <a href="https://github.com/MatiasCordich" target="_blank">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/matiassiocordich/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>

            <div className='home__btn-contact'>
              <a href="mailto:m.cordich20@gmail.com">
                 <i className="far fa-envelope"></i> Contacto
              </a>
              <a href="#">
                <i className="far fa-file"></i> Mi CV
              </a>
            </div>
        </div>
        

    </section>
  ) 
};

export default HomePage;
