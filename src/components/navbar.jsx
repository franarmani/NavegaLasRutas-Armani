import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../context/CartContext';
import './navbar.css'; 
import logo from '../assets/logonavbar.png'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <h1><img src={logo} alt="logo" /></h1> 
        </div>
      </div>
      <div className="navbar-bottom">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link">INICIO</Link></li>
          <li><Link to="/" className="nav-link">ACERCA</Link></li>
          <li><Link to="/products" className="nav-link">PRODUCTOS</Link></li>
          <li><Link to="/" className="nav-link">CONTACTO</Link></li>
          <li className="cart-link">
            <Link to="/cart" className="nav-link"> {/* Enlace al carrito */}
              <CartWidget />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;