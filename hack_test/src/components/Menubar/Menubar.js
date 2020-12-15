import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../Menubar/Menubar.css'
// import Loregis from "../User/Loregis"

function Menubar() {
    return (
        <Router>
            <div className="menu">
                <div className="logo flo-l">
                    <a href="#"><img src="https://www.free-css.com/assets/files/free-css-templates/preview/page257/nectaria/assets/img/logo.png" alt="logo" /></a>
                </div>

                <div className="menu-bar  flo-l">
                    <ul className="menu-ul ">
                        <li>
                            {/* <Link className="link-btn" to="/shop">Shop</Link> */}
                            <a href="#" className="link-btn">Shop</a>
                        </li>

                        <li>
                            {/* <Link className="link-btn" to="/news">News</Link> */}
                            <a href="#" className="link-btn">News</a>
                        </li>

                        <li>
                            {/* <Link className="link-btn" to="/sale">Sale</Link> */}
                            <a href="#" className="link-btn">Sale</a>
                        </li>

                        <li>
                            {/* <Link className="link-btn" to="/store">Store</Link> */}
                            <a href="#" className="link-btn">Store</a>
                        </li>
                        <li>
                            {/* <Link className="link-btn" to="/login">Login</Link> */}
                            <a href="#" className="link-btn">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <Switch>
                        <Route exact path='/login' component={Loregis}></Route>
                    </Switch> */}

        </Router>
    )
}

export default Menubar
