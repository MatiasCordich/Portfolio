import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './navbar.css'


const Navbar = () => {

    const [close, setClose] = useState(true)
 
    const closeNavMenu = () => {
        if (!close) {setClose(true)}
    }

    const openNavMenu = () => {
        if (close) {setClose(false)}  
    }

    useEffect(()=> {
        const mostrarMenu = () => {
            if (window.innerWidth >= 990) {
                setClose(false)    
            } else {
                setClose(true)
            }
        }

        window.addEventListener('resize', mostrarMenu)
    },[])

    

  return (

    <header>
        <nav className='navbar'>
            <i onClick={openNavMenu} className="lni lni-menu"></i>
        </nav>
        <div className={!close ? 'display-navbar' : 'display-navbar-off'}>
                <i onClick={closeNavMenu} className={!close ? "lni lni-close" : 'lni-close-off'}></i>
                <ul className={!close ? 'navbar-links' : 'navbar-links-off'}>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : "inactive")} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : "inactive")} to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : "inactive")} to='/skills'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : "inactive")} to='/proyects'>Proyects</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? 'active' : "inactive")} to='/contact'>Contact</NavLink>
                    </li>
            </ul>
            </div>
    </header>
  
    );
};

export default Navbar;
