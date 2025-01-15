import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';
import ItemCountCart from './ItemCountCart';

const Cart = () => {
  const { cart, removeItem, addItem } = useContext(CartContext);

  const parsePrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, "")) || 0;

  const totalPrice = cart.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0);

  const handleUpdateQuantity = (product, quantity) => {
    addItem(product, quantity);
  };

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Tu carrito está vacío, ¡compra algo!</h2>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <ItemCountCart
                  stock={item.stock}
                  initial={item.quantity}
                  onUpdate={(quantity) => handleUpdateQuantity(item, quantity)}
                />
                <p>Valor: ${(parsePrice(item.price) * item.quantity).toFixed(2)}</p>
              </div>
              <button className="btn-remove" onClick={() => removeItem(item.id)}>
                <img src="/src/assets/trash.png" alt="Eliminar" />
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
