import './style.css';

import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    
    return(
        <div className='main'>
        <div className='container'>
            <div className="wrapper">
                <header>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>    
                </header>
            </div>
            <Outlet/>
        </div>
       <footer>Create by Solvee LLC</footer>
       </div>
    )
}

export default Layout;