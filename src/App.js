
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './pages/About'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Proyects from './pages/Proyects';
import FooterApp from './components/FooterApp';


const app = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/proyects' element={<Proyects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <FooterApp/>
    </BrowserRouter>
  )
};

export default app;
