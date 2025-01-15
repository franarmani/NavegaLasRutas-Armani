import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <button className="btn-decrement" onClick={handleDecrement}>-</button>
      <span className="count">{count}</span>
      <button className="btn-increment" onClick={handleIncrement}>+</button>
      <button className="btn-add" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;