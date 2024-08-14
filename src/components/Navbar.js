import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ showLanguages, showCompany }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState('');

    const showMobileMenu = () => {
        const a = document.querySelector(".mobile-view-navbar");
        const cancle = document.getElementById('cancle');
        const menu = document.getElementById('menu');
        cancle.classList.add('view');
        menu.classList.add('viewmenu');
        a.classList.add('phoneshow');
    }

    const hideMobileMenu = () => {
        const a = document.querySelector(".mobile-view-navbar");
        const menu = document.getElementById('menu');
        const cancle = document.getElementById('cancle');
        menu.classList.remove('viewmenu');
        cancle.classList.remove('view');
        a.classList.remove('phoneshow');
    }

    const signUpHide = () => {
        let mobilehide = document.querySelector('.mobile-hide');
       
        let mobileMenu = document.querySelector('.mobile-menu');

        mobilehide.classList.toggle('spmobile');
       
        mobileMenu.classList.toggle("spmobileHide");
    }

    const handleSignIn = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLogoutMessage('User logged out successfully');
        setTimeout(() => setLogoutMessage(''), 3000); // Hide the message after 3 seconds
    }

    return (
        <>
            <div className='navbar'>
                <div className="nav-ele third-section">
                    <div className="nav-component">
                        <ul>
                            <li><NavLink to="/" ><h2>Uber</h2></NavLink></li>
                            <li className='company mobile-hide'><NavLink to="/" >Company</NavLink><i className="fa-solid fa-chevron-down" onClick={showCompany}></i></li>
                            <li className='mobile-hide'><NavLink to="/Ride">Ride</NavLink></li>
                            <li className='mobile-hide'><NavLink to="/Safety">Safety</NavLink></li>
                            <li className='mobile-hide'><NavLink to="/Help">Help</NavLink></li>
                            <li className='mobile-hide'><NavLink to="/DriverPage">Drive</NavLink></li>
                        </ul>
                    </div>
                    <div className="mobile-menu">
                        <div className="mobile-menu-buttons">
                            {!isLoggedIn ? (
                                <>
                                    <NavLink className="one" to="/signin" onClick={handleSignIn}>LogIn</NavLink>
                                    <NavLink className="two" to="/signup">SignUp</NavLink>
                                </>
                            ) : (
                                <button onClick={handleLogout}>Logout</button>
                            )}
                        </div>
                        <div className="menu-icon">
                            <i className="fa-solid fa-bars" onClick={showMobileMenu} id='menu'></i>
                            <i className="fa-solid fa-xmark" id='cancle' onClick={hideMobileMenu}></i>
                        </div>
                    </div>
                    <div className="right-side mobile-hide">
                        <ul>
                            <li id='languages'><i className="gg-globe-alt"></i><NavLink to="/" onClick={showLanguages} >EN</NavLink></li>
                            <li><NavLink to="/Product" >Products</NavLink></li>
                            {!isLoggedIn ? (
                                <>
                                    <li><NavLink to="/signin" onClick={handleSignIn}>Log in</NavLink></li>
                                    <li><NavLink to="/signup" className="box-white" onClick={signUpHide}>Sign up</NavLink></li>
                                </>
                            ) : (
                                <li><button onClick={handleLogout}>Logout</button></li>
                            )}
                        </ul>
                    </div>
                </div>
                {logoutMessage && <div className="logout-message">{logoutMessage}</div>}
            </div>
        </>
    );
}

export default Navbar;
