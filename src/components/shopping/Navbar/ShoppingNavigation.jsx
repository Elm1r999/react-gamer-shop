import React from 'react'
import {Link} from 'react-router-dom'

const ShoppingNavigation = () => {
    return (
    <div>
        <nav id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Hot Deals</a></li>
                        <li><a href="#">Laptops</a></li>
                        <li><a href="#">Monitors</a></li>
                        <li><a href="#">Mouses</a></li>
                        <li><a href="#">Mousepads</a></li>
                        <li><a href="#">Keyboards</a></li>
                        <li><a href="#">Gaming Chairs</a></li>
                        <li><a href="#">Headsets</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default ShoppingNavigation
