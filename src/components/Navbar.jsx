import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'


const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
 
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

  return (

    <header>
        <nav className='navbar'>
            <button onClick={handleToggle} className='btn-menu'>
                <i className="lni lni-menu"></i>
            </button>

            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <button onClick={closeMenu} className='btn-menu-close'>
                        <i className="lni lni-close"></i>
                    </button>
                    <li>
                        <NavLink onClick={closeMenu} className={({isActive}) => (isActive ? 'active' : "inactive")} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({isActive}) => (isActive ? 'active' : "inactive")} to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({isActive}) => (isActive ? 'active' : "inactive")} to='/skills'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({isActive}) => (isActive ? 'active' : "inactive")} to='/proyects'>Proyects</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={closeMenu} className={({isActive}) => (isActive ? 'active' : "inactive")} to='/contact'>Contact</NavLink>
                    </li>
            </ul>
            
        </nav>
                    

        
    </header>
  
    );
};

export default Navbar;
