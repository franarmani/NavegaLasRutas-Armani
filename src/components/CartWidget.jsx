import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartWidget;
