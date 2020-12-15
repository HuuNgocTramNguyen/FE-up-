import React from 'react';
import './pro.css';

const Product = ({ stats }) => {
    return (
        <div className='pro'>
            {/* <img src={``} alt={}></img> */}
            <h2>{stats.Product}</h2>
            {/* <div className='describe'>
                <p>{`Active : ${stats.Active}`}</p>
            </div> */}
        </div>
    )
}

export default Product;