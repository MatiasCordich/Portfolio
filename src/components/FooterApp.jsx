import './footer.css'

const FooterApp = () => {

  let year = new Date().getFullYear()

  return <footer className='footer'>

    <h4>Matias Sio Cordich <span>&#169;</span> {year}</h4>
    <p>
      Made with <i class="fas fa-heart"></i>
    </p>
    
   
  </footer>;
};

export default FooterApp;
