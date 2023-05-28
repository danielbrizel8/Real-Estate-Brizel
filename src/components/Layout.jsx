
import {Link, Outlet} from "react-router-dom";
import React from 'react';

function Layout() {
    return (
        <div id='container'>
            <nav>
                <Link className='logo' to={"/"}></Link>
                <Link className='link' to={"/"}>Home</Link>
                <a href="#about-us-section">About- us</a> 
                <Link className='link' to={"/properties"}>Properties</Link>
            </nav>

            <div id="main-section">
                <Outlet />
            </div>

            <footer>

            </footer>

        </div>
    )
}

export default Layout