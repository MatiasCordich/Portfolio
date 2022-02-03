import './skills.css'

const Skills = () => {
  return <section className='skills'>
      <h1 className='skills__title'><span>2.</span> Skills</h1>

      <div className='skills__icons'>
        <div className='skills__icons-frontend' data-aos="fade-right" data-aos-duration="1000">
          <h2>Front-End</h2>
          <div className='icons'>
            <i class="icon devicon-html5-plain"></i>
            <i class="icon devicon-css3-plain"></i>
            <i class="icon devicon-javascript-plain"></i>
            <i class="icon devicon-bootstrap-plain"></i>
            <i class="icon devicon-react-original"></i>
          </div>
        </div>
        <div className='skills__icons-backend' data-aos="fade-left" data-aos-duration="1500">
          <h2>Backend</h2>
          <div className='icons'>
            <i class="icon devicon-nodejs-plain"></i>
            <i class="icon devicon-mongodb-plain"></i>
            <i class="icon devicon-express-original"></i>
          </div>
        </div>
        <div className='skills__icons-tools' data-aos="fade-right" data-aos-duration="2000">
          <h2>Herramientas</h2>
          <div className='icons'>
            <i class="icon devicon-git-plain"></i>
            <i class="icon devicon-bash-plain"></i>
            <i class="icon devicon-firebase-plain"></i>
            <i class="icon devicon-npm-original-wordmark"></i>
            <i class="icon devicon-vscode-plain"></i>
          </div>
        </div>
      </div>
  </section>;
};

export default Skills;
