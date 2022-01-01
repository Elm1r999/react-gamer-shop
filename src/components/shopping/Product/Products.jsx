import React from 'react'
import Product from './Product'
import {products} from '../../../data/products.js'
import { v4 as uuidv4 } from 'uuid';

const Products = () => {
    return ( <Product key={uuidv4()} products={products} /> )
}

export default Products