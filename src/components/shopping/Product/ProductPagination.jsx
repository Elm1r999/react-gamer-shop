import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const ProductPagination = () => {
    return (
            <div className="store-filter clearfix">
            <span className="store-qty">Showing 9 products</span>
            <ul className="store-pagination">
                <li className="active">
                    <Link to="#">1</Link>
                </li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li><Link to="#">4</Link></li>
                <li><Link to="#">
                    <BsArrowRight/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProductPagination
