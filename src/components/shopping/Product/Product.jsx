import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeftRight, BsCartPlus, BsStarFill, BsStarHalf, BsHeartFill, BsEyeFill} from 'react-icons/bs'
import ProductPagination from './ProductPagination'

const Product = ({products}) => {
    return (
    <>
    <div className="row">
        {products.map((product, idx) => (
            <div className="col-md-4 col-xs-6" key={idx}>
            <div className="product">
                <div className="product-img">
                    <img src={product.img} alt=""/>
                    <div className="add-to-cart">
                        <button className="add-to-cart-btn"><BsCartPlus/> add to cart</button>
                    </div>
                    <div className="product-label">
                        <span className="sale">-50%</span>
                        <span className="new">NEW</span>
                    </div>
                </div>
                <div className="product-body">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name"><Link to={`search/item=${product.name}`}>{product.name}</Link></h3>
                    <h4 className="product-price">{product.price} <del className="product-old-price">{product.old_price}</del></h4>
                    <div className="product-rating">
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarFill/>
                        <BsStarHalf/>
                    </div>
                    <div className="product-btns">
                        <button className="add-to-wishlist"><BsHeartFill/><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><BsArrowLeftRight/><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><BsEyeFill/><span className="tooltipp">quick view</span></button>
                    </div>
                </div>
            </div>
            </div>            
        ))}
    </div>
    <ProductPagination/>
    </>
    )
}

export default Product
