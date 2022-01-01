import React from 'react'
import {BsCart} from 'react-icons/bs'
import {ImArrowRight} from 'react-icons/im'

const ShoppingCartDropdown = () => {
    return (
        <div className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                <BsCart className='shopping-cart-icon'/>
                <br/>
                <span>Your Cart</span>
                <div className="qty">3</div>
            </a>
            <div className="cart-dropdown">
                <div className="cart-list">
                    <div className="product-widget">
                        <div className="product-img">
                            <img src="/images/asus-rog-gladius-mouse.jpg" alt="" />
                        </div>
                        <div className="product-body">
                            <h3 className="product-name"><a href="#">ASUS ROG GLADIUS MOUSE</a></h3>
                            <h4 className="product-price"><span className="qty">1x</span>$150.00</h4>
                        </div>
                        
                    </div>

                    <div className="product-widget">
                        <div className="product-img">
                            <img src="/images/asus-rog-gaming-mousepad.jpg" alt="" />
                        </div>
                        <div className="product-body">
                            <h3 className="product-name"><a href="#">ASUS ROG GAMING MOUSEPAD</a></h3>
                            <h4 className="product-price"><span className="qty">1x</span>$150.00</h4>
                        </div>            
                    </div>
                </div>
                <div className="cart-summary">
                    <small>2 Item(s) selected</small>
                    <h5>SUBTOTAL: $1650.00</h5>
                </div>
                <div className="cart-btns">
                    <a href="#">View Cart</a>
                    <a href="#">Checkout  <ImArrowRight/></a>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartDropdown
