import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;