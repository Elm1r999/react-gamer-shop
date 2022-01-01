import React from 'react'
import {BsTelephone, BsEnvelope} from "react-icons/bs"
import {FaMapMarkerAlt} from "react-icons/fa"

const ShoppingFooter = () => {
    return (
    <footer id="footer">
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                            <ul className="footer-links">
                                <li><a href="tel:+1-234-567-89-00"><BsTelephone className='header-phone-icon'/> &nbsp;+1-234-567-89-00</a></li>
                                <li><a href="mailto:elmir.ahadov@yahoo.com"><BsEnvelope className='header-email-icon'/> &nbsp;elmir.ahadov@yahoo.com</a></li>
                                <li><a href="https://www.google.com/maps/" target="_blank" rel="noreferrer"><FaMapMarkerAlt className='header-location-icon'/> &nbsp;1337 Park Street</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">Categories</h3>
                            <ul className="footer-links">
                                <li><a href="#">Laptops</a></li>
                                <li><a href="#">Monitors</a></li>
                                <li><a href="#">Mouses</a></li>
                                <li><a href="#">Keyboards</a></li>
                                <li><a href="#">Headsets</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="clearfix visible-xs"></div>

                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">Information</h3>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Orders and Returns</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-xs-6">
                        <div className="footer">
                            <h3 className="footer-title">Services</h3>
                            <ul className="footer-links">
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">View Cart</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Track My Order</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="bottom-footer" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="footer-payments">
                            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt=""/>
                        </ul>
                        <span className="copyright">					
                            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made by Elmir Ahadov.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default ShoppingFooter
