import React from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { BsHeart, BsCart, BsTelephone, BsEnvelope } from "react-icons/bs"
import { FaBars, FaMapMarkerAlt } from "react-icons/fa"

const TopHeader = () => {
    return (
        <div id="top-header">
        <div className="container">
            <ul className="header-links pull-left">
                <li><a href="tel:+1-234-567-89-00"><BsTelephone className='header-phone-icon'/> &nbsp;+1-234-567-89-00</a></li>
                <li><a href="mailto:elmir.ahadov@yahoo.com"><BsEnvelope className='header-email-icon'/> &nbsp;elmir.ahadov@yahoo.com</a></li>
                <li><a href="https://www.google.com/maps/" target="_blank" rel="noreferrer"><FaMapMarkerAlt className='header-location-icon'/> &nbsp;1337 Park Street</a></li>
            </ul>
            <ul className="header-links pull-right">
                <li><a href="#">EN</a></li>
                <li><a href="#"><AiOutlineUser className='user-icon'/>My Account</a></li>
            </ul>
        </div>
    </div>
    )
}

export default TopHeader
