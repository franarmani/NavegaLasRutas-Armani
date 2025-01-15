import React, { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCountCart = ({ stock, initial = 0, onUpdate }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const handleIncrement = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);
      onUpdate(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onUpdate(newCount);
    }
  };

  return (
    <div className="item-count">
      <button className="btn-decrement" onClick={handleDecrement}>-</button>
      <span className="count">{count}</span>
      <button className="btn-increment" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemCountCart;
