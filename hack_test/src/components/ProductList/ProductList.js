import React from 'react';
import Product from '../pro/pro';
import './ProductList.css';

const ProductList = ({ stats }) => {
    return (
        <div className='ProductList'>
            {
                stats.map(pro => <Product key={pro.proCode} stats={pro} />)
            }
        </div>
    )
}
export default ProductList;