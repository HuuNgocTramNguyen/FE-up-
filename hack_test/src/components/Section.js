import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import { Route } from "react-router-dom";
import Cart from './section/Cart'
import Payment from './section/Payment';
import Contact from './section/Contact';
import LoginList from './LoginList';
import RegisterList from './RegisterList';

class Section extends Component {
  render() {
    return (
      <section>
        <Route exact path="/product" component={Products} />
        <Route exact path="/login" component={LoginList} />
        <Route exact path="/register" component={RegisterList} />
        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/contact" component={Contact} />
       
      </section>
    )
  }
}

export default Section;
