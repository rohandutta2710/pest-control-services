import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { pestContext } from "./ContextManager";
import pestControlLogo from './images/Pest Control LOGO.jpeg';
const Header = () => {
    const usingContext = useContext(pestContext);
    return (
        <>
            <div className="top-cursor">
                <a href="#" rel="noreferrer">
                    <div className="arrow-container animated fadeInDown">
                        <div className="arrow-2">
                            <i className="fa fa-angle-up"></i>
                        </div>
                        <div className="arrow-1 animated hinge infinite zoomIn"></div>
                    </div>
                </a>
            </div>
            <div className="header-main">
                <div className="header">
                    <div className="header-left">
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Menu</button>
                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="menu-list">
                                    <li><a href="#about" data-bs-dismiss="offcanvas">About Us</a></li>
                                    <li><a href="#contactus" data-bs-dismiss="offcanvas">Contact us</a></li>
                                    <li><a href="#pestservices" data-bs-dismiss="offcanvas">Our Services</a></li>
                                    <li><a href="upi://pay?pa=9899657260@axl&pn=Asha%20devi&mc=0000&mode=02&purpose=00" target="_blank">Pay Online</a></li>
                                    <li><a href="#reviews" data-bs-dismiss="offcanvas">Reviews</a></li>
                                    {/* <li><Link to="#" data-bs-dismiss="offcanvas"><h1>Modal Form</h1></Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <Link to="/"><img src={pestControlLogo} className="header-rdxeducation-logo" alt="Loading" /></Link>
                        <button className="header-course1">Services<div className="course-i"><i className="fas fa-angle-down"></i></div>
                            <div className="header-course-dropdown">
                                {
                                    usingContext.servicecard.map((value, index) => {
                                        return (<Link to="/services" key={index}>{value.content}</Link>);
                                    })
                                }
                            </div>
                        </button>
                    </div>
                    <div className="header-right">
                        <a href="#about"><p>About Us</p></a>
                        <a href="#contactus"><p>Contact Us</p></a>
                        <a href="#pestservices"><p>Our Services</p></a>
                        <button className="header-button header-more">MORE  <div className="course-i"><i className="fas fa-angle-down"></i></div>
                            <div className="header-more-list">
                                <a href="upi://pay?pa=9899657260@axl&pn=Asha%20devi&mc=0000&mode=02&purpose=00" target="_blank" rel="noreferrer">Pay Online</a>
                                <a href="#reviews">Reviews</a>
                            </div>
                        </button>
                      
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;