import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = ({ showLanguages }) => {
    const navigate = useNavigate();

    const hidelang = () => {
        document.querySelector('.showLanguages').classList.remove('showLang');
    }

    const mobileHide = () => {
        document.querySelector('.mobile-show-horizontal').classList.toggle('mobilehide');
    }

    const redirectToSignUp = () => {
        navigate('/signup');
    }

    return (
        <>
            <div className="mobile-view-navbar">
                <div className="mobile-view-nav-component">
                    <ul>
                        <li className='company m'><NavLink to="/">Company</NavLink><i className="fa-solid fa-chevron-down" onClick={mobileHide}></i>
                            <div className="mobile-show-horizontal">
                                <h3>About us</h3>
                                <h3>Our offerings</h3>
                                <h3>How Uber works</h3>
                                <h3>Global citizenship</h3>
                                <h3>Blog</h3>
                                <h3>Careers</h3>
                            </div>
                        </li>
                        <li className='m'><NavLink to="/Ride">Ride</NavLink></li>
                        <li className='m'><NavLink to="/Safety">Safety</NavLink></li>
                        <li className='m'><NavLink to="/Help">Help</NavLink></li>
                        <li className='products'><NavLink to="/product"><span>:::</span>Products</NavLink></li>
                        <li id='languages'><i className="gg-globe-alt"></i><NavLink to="/" onClick={showLanguages}>EN</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="show-companies">
                <div className="show-horizontal">
                    <h3>About us</h3>
                    <h3>Our offerings</h3>
                    <h3>How Uber works</h3>
                    <h3>Global citizenship</h3>
                    <h3>Blog</h3>
                    <h3>Careers</h3>
                </div>
            </div>
            <div className="slideshows">
                <div className="showLanguages" id='showLanguage'>
                    <div className="langNames">
                        <h1>Select your preferred language</h1>
                        <p onClick={hidelang}>X</p>
                    </div>
                    <div className="lang">
                        <h2 className='act'>English</h2>
                        <h2>हिन्दी</h2>
                        <h2>मराठी</h2>
                    </div>
                </div>
            </div>
            <div className="home-section">
                <div className="backImg">
                    <img src="./images/RiderHome.png" alt="Rider" />
                </div>
                <div className="box-section">
                    <div className="box-section-outline">
                        <div className="three-section-icon">
                            <div className="first-section-icon"><i className="fa-solid fa-car"></i><p>Ride</p></div>
                            <div className="first-section-icon"><img src="./images/EarnIcon.svg" alt="progress" /><p>Drive or Deliver</p></div>
                            <div className="first-section-icon"><i className="fa-solid fa-key"></i><p>Rent your fleet</p></div>
                        </div>
                        <div className="home-heading">
                            <h1>Request a Ride Now</h1>
                            <div className='circle'></div>
                            <i className="fa-solid fa-paper-plane"></i>
                            <input type="text" className='location-input' placeholder='Enter pickup location' autoFocus />
                            <div className='left-line'></div>
                            <div className='square'></div>
                            <input type="text" className='destination-input' placeholder='Enter destination' autoFocus />
                        </div>
                        <div className="home-button">
                            <NavLink>Request Now</NavLink>
                            <NavLink className="secondButton">Schedule for later</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content-dialogue">
                <div className="img-box">
                    <img src="./images/UpdateRider.jpg" alt="rider" className='mobile' />
                    <img src="./images/city.jpeg" alt="city" className='desktop' />
                </div>
                <div className="dialogue-text">
                    <h1>The Uber you know, reimagined for business</h1>
                    <p>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                    <NavLink to="/get-started">Get started</NavLink>
                </div>
            </div> 

            <div className="third-section">
                <div className="main-heading">
                    <h1>Focused on safety, wherever you go</h1>
                </div>
                <div className="two-div">
                    <div className="first-div">
                        <div className="first-div-img">
                            <img src="./images/SafetyHome.jpeg" alt="safetyHome" />
                        </div>
                        <div className="first-div-description">
                            <h4>Our commitment to your safety</h4>
                            <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                            <NavLink to="/community-guidelines">Read about our Community Guidelines</NavLink>
                            <NavLink to="/safety-features">See all safety features</NavLink>
                        </div>
                    </div>
                    <div className="second-div">
                        <div className="first-div">
                            <div className="first-div-img">
                                <img src="./images/City2.jpeg" alt="city" />
                            </div>
                            <div className="first-div-description">
                                <h4>Setting 10,000+ cities in motion</h4>
                                <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                                <NavLink to="/view-all-cities">View all cities</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="vehical-section">
                    <div className="vehical-section-wrap">
                        <div className="vehical-heading">
                            <h1>Ride with Uber</h1>
                        </div>
                        <div className="vehical-section-grid">
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/Auto.png" alt="Auto" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Auto</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                            </div>
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/MotorBike.png" alt="Auto" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Moto</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                            </div>
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/uberHourly.jpeg" alt="Hourly" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Rentals</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                            </div>
                            <div className="vehical-section-first">
                                <div className="vehical-img">
                                    <img src="./images/Intercity-car.png" alt="Car" />
                                </div>
                                <div className="vehical-content-section">
                                    <h2>Uber Intercity</h2>
                                    <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='last-section third-section'>
                <div className="two-sections">
                    <div className="section-one" onClick={redirectToSignUp}>
                        <h1>Sign up to drive</h1>
                        <div className="last-section-icon">
                            <h1>&#8594;</h1>
                        </div>
                    </div>
                    <div className='bottom-line1'></div>
                    <div className="section-one" onClick={redirectToSignUp}>
                        <h1>Sign up to ride</h1>
                        <div className="last-section-icon">
                            <h1>&#8594;</h1>
                        </div>  
                    </div>
                    <div className='bottom-line2'></div>
                </div>
            </div>
        </>
    )
}

export default Home;
