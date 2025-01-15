import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import products from '../data/products';

const ItemListContainer = ({ message }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div className="item-list-container">
      <div className="new-drop-text-container">
        <h2 className="new-drop-text">{message}</h2>
      </div>

      <div className="drops-container">
        {productList.map((product) => (
          <div className="drop-item" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <Link to={`/product/${product.id}`} className="btn-buy">Comprar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ItemListContainer;