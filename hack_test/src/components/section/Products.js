import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context'
import '../css/Products.css'


class Products extends Component {

  static contextType = DataContext;

  render() {

    const { products } = this.context;

    return (
      <div class="title-pro">
        <h1> Our Products</h1>
        <div id="product">
          {
            products.map(product => (
              <div className='cart' key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <img src={product.image} alt="" />
                </Link>
                <div className="content">
                  <h3>
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </h3>
                  <span>${product.price}</span>
                  <button onClick={() => this.context.addCart(product.id)}>Add to Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Products;
