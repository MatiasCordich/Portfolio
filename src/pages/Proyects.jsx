import './proyects.css'

const Proyects = () => {
  return <section className='proyects' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">
      <h1 className='proyects-title'>
        <span>3.</span> Proyectos</h1>
      <div className='cards'>

        <div className='card'>
          <div className='face face1'>
            <div className='content'>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <h2 className='description-title'>Calculadora</h2>
              <p className='description-text'>Calculadora funcional hecha con Javascript vanilla</p>
              <p className='description-tech'>HTML | CSS | JS</p>
              <div className='btn__proyects'>
                <a href="https://calculadora-lemon-rho.vercel.app/" target='__blank'>
                  <i class="fas fa-link"></i>
                </a>
                <a href="https://github.com/MatiasCordich/Calculadora" target='__blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='face face1'>
            <div className='content-1'>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <h2 className='description-title'>¿Queseria de mi?</h2>
              <p className='description-text'>Landing Page sobre una ecommerce de quesos</p>
              <p className='description-tech'>HTML | CSS </p>
              <div className='btn__proyects'>
                <a href="https://pagina-quesos.vercel.app/" target='__blank'>
                  <i class="fas fa-link"></i>
                </a>
                <a href="https://github.com/MatiasCordich/Pagina-Quesos" target='__blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='face face1'>
            <div className='content-2'>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <h2 className='description-title'>Pokemon Random</h2>
              <p className='description-text'>App que arroja un pokemon random con sus stats.</p>
              <p className='description-tech'>React | PokeApi</p>
              <div className='btn__proyects'>
                <a href="https://poke-api-xi.vercel.app/" target='__blank'>
                  <i class="fas fa-link"></i>
                </a>
                <a href="https://github.com/MatiasCordich/PokeApi" target='__blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='face face1'>
            <div className='content-3'>
            </div>
          </div>
          <div className='face face2'>
            <div className='content'>
              <h2 className='description-title'>App del Clima</h2>
              <p className='description-text'>Información meteorológica de tu ubicación actual</p>
              <p className='description-tech'>HTML | CSS | JS | WeatherAPI</p>
              <div className='btn__proyects'>
                <a href="https://weather-app-alpha-seven.vercel.app/" target='__blank'>
                  <i class="fas fa-link"></i>
                </a>
                <a href="https://github.com/MatiasCordich/Weather-App" target='__blank'>
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
               
      </div>


  </section>;
};

export default Proyects;
