import React, { Component } from 'react';
// import Menu from './svg/bars-solid.svg'
// import Close from './svg/times-solid.svg'
import CartIcon from './svg/cart-plus-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'
import { DataContext } from './Context'
import SearchBox from './SearchBox/SearchBox';

class Header extends React.Component {
    static contextType = DataContext;
    state = {
        toggle: false
    }

    render() {
        const { cart } = this.context;
        //   console.log({cart})
        return (
            <div className="menu">
                <div className="logo flo-l">
                    <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSUMBBosn54srDJUsGJKtc0qbn2qpkaKbzw&usqp=CAU" alt="logo" /></a>
                </div>

                <div className="input flo-l">
                    <SearchBox placeholder="Enter your product ..." handleChange={this.handleChange} />
                </div>

                <div className="menu-bar  flo-l">
                    <ul className="menu-ul ">
                        <li><Link to="/" className="link-btn hide">Home</Link></li>
                        <li><Link to="/product" className="link-btn">Product</Link></li>
                        <li><Link to="/contact" className="link-btn hide">Contact</Link></li>
                        <li><Link to="/about" className="link-btn hide">About</Link></li>
                        <li><Link to="/login" className="link-btn hide">Login</Link></li>
                        <li><Link to="/register" className="link-btn hide">Rigister</Link></li>
                        {/* <li className="close" >
                            <img src={Close} alt="" width="20" className="link-btn" />
                        </li> */}
                        <li className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to="/cart" className="link-btn">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/293px-Shopping_cart_icon.svg.png" alt="" width="20" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
