import React from "react";
import { Link } from "react-router-dom";
import pestControlLogo from './images/Pest Control LOGO.jpeg'
const iconarr = [{ icon: <i className="fab fa-facebook-square"></i>, hrefs: "https://www.facebook.com/people/PEST-Control-Servises/100068717921489/" }
    , { icon: <i className="fab fa-whatsapp"></i>, hrefs: "https://api.whatsapp.com/send?phone=919899657260" },
{ icon: <i className="fab fa-twitter"></i>, hrefs: "#" },
{ icon: <i className="fas fa-envelope"></i>, hrefs: "mailto:pestcontrolservice2018@gmail.com" }]
const Footer = () => {
    return (
        <>
            <div className="footer" id="contactus">
                <div className="footer-left">
                    <h1>LOCATION</h1>
                    <p>Plot No-9, H No.-US-135, North School Block Mandawali Fazalpur, East Delhi, Delhi-110092</p>
                    <div className="number">
                        <i className="fas fa-phone-volume"></i>
                        <a href="tel:9811078851" className="phone-number1"><p className="footer-phone1">+91 9971980254</p></a>
                        <a href="https://api.whatsapp.com/send?phone=919899657260" className="phone-number2" target="blank"><p className="footer-phone2">+91 9899657260</p></a>
                    </div>
                    <div className="mail">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:pestcontrolservice2018@gmail.com" className="footer-mail">pestcontrolservice2018@gmail.com</a>
                    </div>
                </div>
                <div className="footer-right">
                    <Link to="/">
                        <img src={pestControlLogo} className="header-rdxeducation-logo" alt="Loading" />
                    </Link>
                    <div className="footericon">
                        {iconarr.map((value, index) => {
                            return <a key={index} href={value.hrefs} target="_blank">{value.icon}</a>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;